<!--
 * @Author: findnr
 * @Date: 2025-01-22 21:59:42
 * @LastEditors: findnr
 * @LastEditTime: 2025-01-23 10:24:39
 * @Description: 
-->
#### 具体的搭建流程
##### 服务端
- 在：https://github.com/fatedier/frp/releases 下载对应操作系统的软件：下载后解压有以下文件：
```sh
frpc
frpc.toml
frps
frps.toml
LICENSE
```
- 服务端写systemd对应的脚本:vim /etc/systemd/system/frps.service
```sh
[Unit]
# 服务名称，可自定义
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
# 启动frps的命令，需修改为您的frps的安装路径
ExecStart = /path/to/frps -c /path/to/frps.toml

[Install]
WantedBy = multi-user.target
```
- 说明，默认监听的是7000端口，配制文件是/path/to/frps.toml
##### 客户端
- 在：https://github.com/fatedier/frp/releases 下载对应操作系统的软件：下载后解压有以下文件：
```sh
frpc
frpc.toml
frps
frps.toml
LICENSE
```
- 配制的案例：https://gofrp.org/zh-cn/docs/examples/