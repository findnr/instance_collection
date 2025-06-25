<!--
 * @Author: findnr
 * @Date: 2024-03-31 08:54:59
 * @LastEditors: findnr
 * @LastEditTime: 2024-03-31 09:51:29
 * @Description: 
-->
###  配置 moon 节点加速访问速度
#### 服务器安装zerotier
```sh
curl -s https://install.zerotier.com/ | sudo bash
```
#### 加入你的网络ID
```sh
zerotier-cli join 你的网络ID
```
#### 配制moon节点
```sh
cd /var/lib/zerotier-one
zerotier-idtool initmoon identity.public > moon.json
```
- 编辑节点
```sh
vim moon.json
# 将 stableEndpoints 修改为服务器的 IP 地址：
"stableEndpoints": ["服务器IP地址/9993"]
# 然后保存退出。
```
### 生成签名文件
```sh
zerotier-idtool genmoon moon.json
```
### moon 节点加入网络
```sh
mkdir moons.d
mv 000000xxxxxxx.moon moons.d/
# 重启服务
systemctl restart zerotier-one
```
### 客户端加入
```sh
zerotier-cli orbit XXXXXX XXXXXX（二个均改为moon的ID号)
```
### 查看是否加入成功
- 通过命令看一下是否成功，主要是看节点有没有带MOON的，如果有成功，否则失败
```sh
zerotier-cli listpeers
```
