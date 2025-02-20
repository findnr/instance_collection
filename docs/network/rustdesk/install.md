#### 安新相关的步骤
- 在github上下载服务端（使用最新稳定版本）：https://github.com/rustdesk/rustdesk-server
- 下载后有三个文件：
```sh
hbbs - RustDesk ID/会和服务器
hbbr - RustDesk 中继服务器
rustdesk-utils - RustDesk 命令行工具
```
- 自建服务器中文件文档：https://rustdesk.com/docs/zh-cn/self-host
- 启动程序：
```sh
./hbbs 
./hbbr
```
- 默认情况下，hbbs 监听21115(tcp), 21116(tcp/udp), 21118(tcp)，hbbr 监听21117(tcp), 21119(tcp)。务必在防火墙开启这几个端口， 请注意21116同时要开启TCP和UDP。其中21115是hbbs用作NAT类型测试，21116/UDP是hbbs用作ID注册与心跳服务，21116/TCP是hbbs用作TCP打洞与连接服务，21117是hbbr用作中继服务, 21118和21119是为了支持网页客户端。如果您不需要网页客户端（21118，21119）支持，对应端口可以不开。
```sh
TCP(21115, 21116, 21117, 21118, 21119)
UDP(21116)
```
- hbbs的systemd的启动脚本:vim /usr/lib/systemd/system/RustDeskHbbs.service
```sh
[Unit]
Description=RustDesk Hbbs
After=network.target

[Service]
User=<this is run user>
Type=simple
WorkingDirectory=<this is run dir>
ExecStart=<this is run dir>/hbbs
ExecStop=/bin/kill -TERM $MAINPID

[Install]
WantedBy=multi-user.target
```
- hbbr的systemd的启动脚本:vim /usr/lib/systemd/system/RustDeskHbbr.service
```sh
[Unit]
Description=RustDesk Hbbr
After=network.target

[Service]
User=<this is run user>
Type=simple
WorkingDirectory=<this is run dir>
ExecStart=<this is run dir>/hbbr
ExecStop=/bin/kill -TERM $MAINPID

[Install]
WantedBy=multi-user.target
```
```sh
# 脚本启动hbbs
systemctl start RustDeskHbbs
systemctl enable RustDeskHbbs
# 脚本启动hbbr
systemctl start RustDeskHbbr
systemctl enable RustDeskHbbr
```
- 客户端下载(windows,linux,mac,ios,Android,web)：https://github.com/rustdesk/rustdesk/releases
- 网络设置把自建的ip地址服务填好就可以了