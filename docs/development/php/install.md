<!--
 * @Author: findnr
 * @Date: 2024-04-07 19:52:23
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-07 20:01:12
 * @Description: 
-->
### rockylinux9使用remi安装php
- [remi安装](/soft/remi/install.html)
- 具体安装内容
```sh
# 这里以安装 php 包为例，使用 remi 仓库安装包，列出所有 php 包 
dnf module list php 
# 该命令安装 PHP 8.1 及其所有依赖项 如果想使用不同的版本直接修改就可以了（例如8.2版本php:remi-8.2）
dnf module install php:remi-8.1 
# 启用 php remi-8.1 
dnf module enable php:remi-8.1 -y 
# 安装php
dnf install php php-mcrypt php-devel php-cli php-gd php-pear php-curl php-fpm php-mysql php-ldap php-zip php-fileinfo php-swoole php-redis php-pdo php-mysqlnd php-bcmath php-json php-mbstring php-mcrypt php-opcache php-pecl-crypto php-pecl-mcrypt php-pecl-geoip php-snmp php-soap php-xml php-devel php-tidy
```
### 启动php-fpm
```sh
# 开机启动
systemctl enable php-fpm
# 启动
systemctl start php-fpm
```