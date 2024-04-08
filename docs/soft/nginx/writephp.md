<!--
 * @Author: findnr
 * @Date: 2024-04-08 14:03:56
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-08 14:06:29
 * @Description: 
-->
### 
```sh
server {
    listen 443 ssl;
    server_name  api.test.com;
    ssl_certificate /root/.acme.sh/nginx/totalcert.pem;
    ssl_certificate_key /root/.acme.sh/nginx/totalkey.pem;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    
    root   /path/thikphp/public;
    location / {
        if (!-e $request_filename) {
        rewrite ^/(.*)$ /index.php/$1 last;
              break;
        }
        
        index  index.php index.html index.htm;
    }
    location  ~ ^(.+\.php)(.*)$ {
        fastcgi_pass   php-fpm;
        fastcgi_index  index.php;
        fastcgi_split_path_info       ^(.+\.php)(.*)$;
        fastcgi_param  SCRIPT_FILENAME  /$document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO       $fastcgi_path_info;
        include        fastcgi_params;
    }
}
```
```sh
server {
    listen       80;
    server_name  api.test.com;
    root   /home/cym/rxd_api/public;
    location / {
        if (!-e $request_filename) {
        rewrite ^/(.*)$ /index.php/$1 last;
              break;
        }
        
        index  index.php index.html index.htm;
    }
    location  ~ ^(.+\.php)(.*)$ {
        fastcgi_pass   php-fpm;
        fastcgi_index  index.php;
        fastcgi_split_path_info       ^(.+\.php)(.*)$;
        fastcgi_param  SCRIPT_FILENAME  /$document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO       $fastcgi_path_info;
        include        fastcgi_params;
    }
}
```