<!--
 * @Author: findnr
 * @Date: 2024-10-31 14:06:47
 * @LastEditors: findnr
 * @LastEditTime: 2024-10-31 14:45:43
 * @Description: 
-->
#### linux系统下的测速工具
- iperf
- 此测试软件需要客户端和服务端，服务端安装好启动，客户端进行点到点的测试
```sh
#ubuntu中安装
sudo apt install iperf
# rocklinux 安装
sudo dnf install iperf
#查看ip地址
ip addr show | grep inet.*brd
#服务启动
iperf -s
#客户端进行测试
iperf -c 192.168.1.2
```