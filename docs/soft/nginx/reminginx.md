#### 使用remi安装的nginx配制phpmyadmin
- 前提是要安装好[nginx安装](./install.html)，php
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
```sh
# 在/etc/nginx/confi.d/文件夹下添加一个配制文件phpmyadmin.conf
# 内容如下，分别是80端口和443端口
```