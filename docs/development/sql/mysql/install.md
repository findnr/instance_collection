<!--
 * @Author: findnr
 * @Date: 2024-04-07 18:08:22
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-07 18:56:19
 * @Description: 
-->
#### mariadb安装过程
- 官网：https://mariadb.com/
- 官方yum源安装说明：https://mariadb.com/kb/en/yum/
- 各版本支持时长：https://mariadb.org/about/
##### 运行官方脚本 添加 MariaDB 的源
```sh
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
# 添加完成功后可在/etc/yum.repos.d/目录下找到，此源为官方最新源
# 如果要添加指定版本的源可参考：https://mariadb.com/kb/en/mariadb-package-repository-setup-and-usage/ ，可以找指定版本，下面以10.6版本为例
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.6"
```
##### 安装mariadb
```sh
# 安装
dnf install MariaDB-server
# 查看状态
systemctl status mariadb
# 启动mariadb
systemctl start mariadb
# 停止
systemctl stop mariadb
# 开机启动
systemctl enable mariadb
# 关闭开机启动
systemctl disable mariadb
```
##### 设置root帐号密码
```sh
# 执行下面命令可根据提示进行root用户密码设置
mariadb-secure-installation
```
##### 创建新帐号
```sh
mariadb -uroot
# 第1步，新建管理员账号
#   test 是账号名（随便起）
#   '%' 表示任意 Host ，也就是可以远程连接
#  c_123456 是密码
CREATE USER test@'%' IDENTIFIED BY 'c_123456';
# 第2步，授权
GRANT ALL PRIVILEGES ON *.* TO 'test'@'%' WITH GRANT OPTION;
# 第3步，刷新
FLUSH PRIVILEGES;
```
##### 防火墙放行3306端口
```sh
# （前提是需要通过IP进行连接使用才放行，如果使用127.0.0.1来连接就不了）
## 第1步 查看防火墙是否正在运行中。一般情况下是开机自启动的
firewall-cmd --state

## 第2步（可选） 如果防火墙没有运行中，可通过如下命令启动防火墙 并设置 开机自启动
# 启动防火墙
systemctl start firewalld
# 开机自启动防火墙
systemctl enable firewalld

## 第3步 查询 3306 端口是否已经放行了
# 查询当前哪些端口被放行了
firewall-cmd  --zone=public  --list-ports
# 查询 3306 端口是否放行了
firewall-cmd --query-port=3306/tcp

## 第4步 如果第3步发现 3306 端口没有被放行的话，就放行它
# 永久放行指定端口
firewall-cmd --zone=public --add-port=3306/tcp --permanent
# 重载防火墙配置，让前面的配置生效
firewall-cmd --reload

## 第5步（可选）如果不想放行某个端口了，可以永久关闭它
firewall-cmd --zone=public --remove-port=3306/tcp --permanent
```