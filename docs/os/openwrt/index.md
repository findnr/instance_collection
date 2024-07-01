#### 简单安装步骤
- 第一步：
```sh
\VBoxManage.exe convertfromraw "C:\Users\Administrator\Desktop\openwrt-x86-64-generic-squashfs-combined-efi.img" "E:\vdi\openwrt.vdi" -format VDI
```
- 如果报错：
```sh
#第一
dd if=C:\Users\Administrator\Desktop\openwrt-x86-64-generic-squashfs-combined-efi.img of=C:\Users\Administrator\Desktop\lede.img bs=128000 conv=sync
#第二
.\VBoxManage.exe convertfromraw "C:\Users\Administrator\Desktop\lede.img" "E:\vdi\openwrt.vdi" -format VDI
```
- 第二步：网络改桥接，进入主机改ip地址
```sh
vim /etc/config/network
```
#### 官方教程
- 网址：https://openwrt.org/zh/docs/guide-user/virtualization/virtualbox-vm