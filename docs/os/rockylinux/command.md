<!--
 * @Author: findnr
 * @Date: 2024-05-10 09:23:52
 * @LastEditors: findnr
 * @LastEditTime: 2024-06-26 20:58:14
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
- 使用history -c
```sh
history -c
```
