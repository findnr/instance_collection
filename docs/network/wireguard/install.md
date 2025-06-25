<!--
 * @Author: findnr
 * @Date: 2025-01-27 13:51:32
 * @LastEditors: findnr
 * @LastEditTime: 2025-02-05 09:19:59
 * @Description: 
-->
#### wireguard搭建
- rockylinux: dnf install wireguard-tools
- ubuntu: apt install wireguard
- centos: yum install wireguard-tools
- 安装后查看版本：wg --version
- 生成密钥：
```shell
 wg genkey | tee /etc/wireguard/privatekey | wg pubkey > /etc/wireguard/publickey
 cat /etc/wireguard/privatekey
 cat /etc/wireguard/publickey
 ```
- 创建一个配置文件：vim /etc/wireguard/wg0.conf
```conf
[Interface]
Address = 192.168.233.1/24
ListenPort = 18443
PrivateKey = wMpvJLkkWUAIHUgPVqTuBuBzwYQBPVX3DbrD9Zf4klY=
MTU = 1420

PostUp = sysctl -w net.ipv4.ip_forward=1; iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = sysctl -w net.ipv4.ip_forward=0; iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
PublicKey = w8kODvlhARNqskyiem2TU/3hemHd2ecL9miEd6hpwBc=
AllowedIPs = 192.168.233.2/32

[Peer]
PublicKey = 6ktp9LrmD/MNiv69J4pzEG3DL2EBODlQyfZsNK1owB8=
AllowedIPs = 192.168.233.3/32
```
