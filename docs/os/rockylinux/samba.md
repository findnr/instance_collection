<!--
 * @Author: findnr
 * @Date: 2024-06-05 10:18:55
 * @LastEditors: findnr
 * @LastEditTime: 2024-06-05 14:12:16
 * @Description: 
-->
#### 案例一
- 说明：要求所有的帐号之间有读取权限，没有写入权限，只有自己的帐号有全部权限，还有一个公共的帐号，所有帐都有全部权限
- user1和user2是两个用户,share为公共帐号
- 第一步：安装samba
- 第二步：创建用户
```sh
useradd user1
useradd user2
useradd share
```
- 第三步：修改权限
```sh
chmod 755 /home/user1
chmod 755 /home/user2
chmod 777 /home/share
```
- 第四步：添加samba用户名和登录密码
```sh
smbpasswd -a user1
smbpasswd -a user2
smbpasswd -a share
```
- 第五步：设置selinux
- 第六步：关闭防火墙
- 第七步：配制/etc/samba/smb.conf
```sh
[global]
    workgroup = WORKGROUP
    security = user
    guest account = nobody
    encrypt passwords = yes

    passdb backend = tdbsam

    printing = cups
    printcap name = cups
    load printers = yes
    cups options = raw
[user1]
    comment = welcome user1
    path = /home/user1
    browseable = yes
    guest ok = no
    read only = yes
    write list = user1
    valid user = user1
[user2]
    comment = welcome user2
    path = /home/user2
    browseable = yes
    guest ok = no
    read only = yes
    write list = user2
[share]
    comment = welcome share
    path = /home/share
    public = yes
    read only = no
    guest ok = yes
    create mask = 0777
    directory mask = 0777
```
- 第七步：重启samba服务
```sh
systemctl restart smb.service
```