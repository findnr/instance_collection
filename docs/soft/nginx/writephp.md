<!--
 * @Author: findnr
 * @Date: 2024-04-08 14:03:56
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-08 14:06:29
 * @Description: 
-->
### 普通重定向
- 配制https
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
- 配制http
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
#### 根据不同设备定向到不同的应用
```sh
map $http_user_agent $is_mobile {
    default         0;
    ~*iphone        1;
    ~*android       1;
    ~*ipad          1;
    ~*ipod          1;
    ~*windows\sphone    1;
}
server {
    listen 80;
    server_name example.com;
    if ($is_mobile) {
        rewrite ^ http://m.example.com$request_uri? permanent;
    }
    location / {
        root /var/www/example.com;
    }
}
```
- 在这个示例中，首先使用map模块定义了一个变量$is_mobile，它会根据请求的用户代理来判断是否为手机端，如果是手机端，则该变量的值为1，否则为0。
- 然后，在server块内部，使用了一个if语句来检查变量$is_mobile的值，如果为1（表示手机端），则执行重定向到http://m.example.com，否则继续处理其他请求。
- 需要注意的是，使用if语句会增加NGINX的负载，尤其是在高流量的情况下。如果可能的话，最好使用其他更高效的方法来实现重定向，比如使用NGINX的ngx_http_browser_module模块或者在应用程序中进行重定向。
#### 根据不现的请求不同的服务
```sh
server {
    listen 80;
    server_name example.com;
    location /service1 {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    location /service2 {
        proxy_pass http://127.0.0.1:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    location / {
        return 404;
    }
}
```
- 在这个示例配置中，我们配置了一个NGINX服务器块来监听example.com的80端口。根据请求的路径，NGINX会将请求代理到不同的后端服务。
- 对于路径为/service1的请求，NGINX会将请求代理到运行在8000端口上的服务。
- 对于路径为/service2的请求，NGINX会将请求代理到运行在8001端口上的服务。
- 对于其他路径的请求，NGINX会返回404 Not Found。
- 这样配置后，NGINX会根据请求的路径将请求代理到不同的服务，实现了根据不同路径请求不同服务的功能。