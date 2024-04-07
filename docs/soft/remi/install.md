<!--
 * @Author: findnr
 * @Date: 2024-04-07 14:42:56
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-07 15:01:15
 * @Description: 
-->
#### rockylinux9 使用
- 参考教程：https://rockylinux.cn/notes/zai-rocky-linux-9-shang-qi-yong-epel-he-remi-cang-ku.html
```sh
dnf update -y
dnf upgrade --refresh -y
# AlmaLinux 9, Rocky Linux 9
dnf config-manager --set-enabled crb
dnf install epel-release
dnf update
# Rocky Linux 9 上启用 Remi 仓库
dnf install https://rpms.remirepo.net/enterprise/remi-release-9.rpm
# 查看仓库源
dnf repolist
```
##### Remi 仓库的使用方法
```sh
# 列出 remi 仓库下所有可供安装的包 
dnf --disablerepo="*" --enablerepo="remi" list available 
dnf --disablerepo="*" --enablerepo="remi-safe" list available 
# 这里以安装 php 包为例，使用 remi 仓库安装包，列出所有 php 包 
dnf module list php 
# 该命令安装 PHP 8.1 及其所有依赖项 
dnf module install php:remi-8.1 
# 通过 remi 仓库启用或禁用包 
# 启用 php remi-8.1 
dnf module enable php:remi-8.1 -y 
# 禁用 
php remi-8.1 dnf module disable php:remi-8.1 -y
```
##### 永久启用或禁用 Remi 仓库
```sh
vim /etc/yum.repos.d/remi.repo 
# 将 remi 下面的 enabled 设置为 0 或 1，0：禁用，1：启用。 [remi] enabled=0 
# 对文件进行更改后，必须更新系统才能使配置生效。 
dnf update dnf repolist 
```