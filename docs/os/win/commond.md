<!--
 * @Author: findnr
 * @Date: 2024-03-30 21:38:33
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-26 06:57:29
 * @Description: 
-->
### 服务相关
```sh
#开机启动项
shell:startup
#查看服务
netstat -ano|findstr " LISTENING"
#服务管理
net [start|stop] mysql
```
### 网络相关
```sh
#延迟和丢包率
ping ip/域名
#Ping 测试 5 次：
ping ip/域名 -n 5
#清除本地 DNS 缓存：
ipconfig /flushdns
#路由追踪：
tracert ip/域名
#获取域名解析
nslookup www.cnblogs.com
#显示出IP路由
route print
#探测182.140.167.44是否使用TCP协议监听8000端口（注意：telnet命令不支持UDP端口检测）
telnet 182.140.167.44 8000
#查看开启了哪些端口（-a）,查看开启了哪些端口，并显示进程pid(-ao),查看端口的网络连接情况(-n),查看正在进行的工作(-v),查看tcp协议的使用情况(-p tcp)
netstat
```
### 进程管理
```sh
#显示当前正在运行的进程
tasklist
#运行程序或命令
start 程序名
#结束进程，按名称（关闭记事本）
taskkill /im notepad.exe
#结束进程，按 PID（关闭 PID 为 1234 的进程）/f 强制
taskkill /pid 1234 /f
```
### 开关机
```sh
#关机
shutdown /s
#重启
shutdown /r
#注销
shutdown /l
#休眠
shutdown /h /f
#取消关机
shutdown /a
#定时关机（3600 秒后关机）
shutdown /s /t 3600
```