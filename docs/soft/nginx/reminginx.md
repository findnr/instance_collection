<!--
 * @Author: findnr
 * @Date: 2024-04-07 19:28:09
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-08 09:31:23
 * @Description: 
-->
#### 使用remi安装的nginx配制phpmyadmin
- 前提是要安装好nginx[(nginx安装)](./install.html)，php[(php安装)](/development/php/install.html)
- 如果是配制https，可以参考自动配制https[(https安装)](/soft/acme/install.html)
- 默认引入了php-fpm配制，配制文件在/etc/nginx/default.d/php.conf
- 默认增加upstream代理，配制文件在/etc/nginx/conf.d/php-fpm.conf，下一次在配制PHP解析时就可以再接用php-fpm了
- phpmyadmin官网：https://www.phpmyadmin.net/
- phpmyadmin版本支持详细：https://www.phpmyadmin.net/downloads/#support
```sh
# 根据不同的版本下载不同的phpmyadmin版本
wget https://files.phpmyadmin.net/snapshots/phpMyAdmin-5.2+snapshot-all-languages.zip
# 下载完成后解压文件
unzip phpmyadmin.zip
# 使用mv命令把文件移动到要解析的文件夹
mv phpmyadmin /home/user/phpmyadmin
```
- 在/etc/nginx/conf.d/文件夹中创建phpmyadmin.conf配制文件，配制内容如下，根据自己的情况修改就可以了
- 配制https
```sh
server{
    listen 443 ssl;
    server_name test.abc.com; #域名
    ssl_certificate /path/totalcert.pem; #证书路径
    ssl_certificate_key /path/totalkey.pem; #证书路径
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    root /path/phpmyadmin; #当前应用的根文件夹
    include /etc/nginx/default.d/php.conf;
}
```
- 配制http
```sh
server{
    listen 80;
    server_name test.abc.com; #域名
    root /path/phpmyadmin; #当前应用的根文件夹
    include /etc/nginx/default.d/php.conf;
}
```
- 注意事项：
- 如果报404：root配制的路径不对，请仔细查看
- 如果报 not found file.这是没有权限，同时也要注意看一下上一层文件的权限
- 查看一下/etc/nginx/nginx.conf下配制user的用户，一般用root
- 查看一下/etc/php-fpm.d/www.conf下配制的user group两个用户
- 查看一下/var/lib/php/sessions 文件的权限是不是和php-fpm的对应用户是不是一样，最好改chmod 777