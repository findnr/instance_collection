<!--
 * @Author: findnr
 * @Date: 2024-04-03 13:52:52
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-07 19:24:55
 * @Description: 
-->
#### rockylinux安装
- [remi安装：](/soft/remi/install.html)
- 使用remi仓库安装
```sh
# 这里以安装 nginx 列出nginx
dnf module list nginx
# 启用 nginx
dnf module enable nginx -y
# 安装nginx
dnf install nginx
```