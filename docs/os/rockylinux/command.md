<!--
 * @Author: findnr
 * @Date: 2024-05-10 09:23:52
 * @LastEditors: findnr
 * @LastEditTime: 2024-06-27 07:37:59
 * @Description: 
-->
#### 进程相关
- pstree (查看进程树)
```sh
#安装
dnf install psmisc
#使用
#参数	说明
#-p	显示进程的PID
#-u	显示进程的user
#-V	显示pstree的版本信息
#-p pid	显示进程号为pid的进程信息
#-u user	显示用户名为user的进程信息
########    举例
pstree -p
```
#### 网络相关
- net-tools工具集
- github地址：https://github.com/ecki/net-tools
- 命令集如下：
```sh
arp
hostname
ifconfig
netstat
rarp
route
plipconfig
slattach
mii-tool
iptunnel
ipmaddr
```
#### 命令行命令补全的集合
- bash-completion
- github地址：https://github.com/scop/bash-completion
- 下面是安装命令
```sh
dnf install bash-completion
```
#### 后台启动
- 第一种：使用nohub命令
```sh
nohup [excuse command] 1>/dev/null 2>&1 &
```
#### 用户登录日志
- 登录成功日志文件(/var/log/wtmp)
- 登录失败日志文件(/var/log/btmp)
```sh
#查看登录成功日志
last
#清空登录成功日志
echo > /var/log/wtmp
#查看登录失败日志
lastb
#清空登录失败日志
echo > /var/log/btmp
```
#### 清空历史执行命令
- 第一种：使用history -c
```sh
history -c
```
- 第二种：清空用户目录下的这个文件即可
```sh
echo > ./.bash_history
```
#### linux查看发行版本
- 如果是基于redhat的发行版本可以使用
```sh
cat /etc/redhat-release
```
- 如果是其它linux可以使用以下命令，里面包含了发行版本信息
```sh
cat /proc/version
```
#### linux查看内核版本的两种方法
- 第一种
```sh
cat /proc/version
```
- 第二种
```sh
uname -a
```
#### 通过ssh 代理来访问web服务(通过本地http://127.0.0.1:13688 来访问服务器的15208 web服务)
```bash
ssh -L 15208:127.0.0.1:13688 root@192.168.81.80
ssh -f -N -L 127.0.0.1:22222:127.0.0.1:50789 root@192.168.196.142
```