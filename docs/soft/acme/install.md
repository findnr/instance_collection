### 安装
```bash
curl curl https://get.acme.sh | sh -s email=my@example.com
```
- 使用cf dns验证
1. 注册一个cf账号,把域名管到此帐号下
2. 登录cf账号，点击头像，选择`API Tokens`，点击`Create API Token`，选择`Edit zone DNS`，点击`Create`，复制token
```bash
export CF_Token="RB0vNht1tBxxxxxxxxxxxxxxxxxxx"
```
- 生成证书
```bash
acme.sh --issue --dns dns_cf \
-d test.com \
-d '*.test.com' \
--keylength ec-256
```
- 创建证书目录
```bash
mkdir -p /etc/nginx/ssl/test.com
```
- 安装证书
```bash
acme.sh --install-cert -d test.com --ecc \
--key-file       /etc/nginx/ssl/test.com/key.pem \
--fullchain-file /etc/nginx/ssl/test.com/fullchain.pem \
--reloadcmd      "systemctl reload nginx"
```
- 实例（配制 nginx）
```json
server{
        listen 443 ssl;
        server_name doc.test.com;
        ssl_certificate /etc/nginx/ssl/test.com/fullchain.pem;
        ssl_certificate_key  /etc/nginx/ssl/test.com/key.pem;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        location / {
                root /home/doc/;
        }
}
server{
        listen 80;
        server_name doc.test.com;
        location / {
                root /home/doc/;
        }
}
```
- 实例（配制 nginx 之反向代理TZ）
```json
server{
   server_name bing.test.com;
   ssl_certificate /etc/nginx/ssl/test.com/fullchain.pem;
   ssl_certificate_key  /etc/nginx/ssl/test.com/key.pem;
   listen 443 ssl;
   listen [::]:443 ssl;

   ssl_session_timeout 1d;
   ssl_session_cache shared:MozSSL:10m;
   ssl_session_tickets off;

   ssl_protocols         TLSv1.2 TLSv1.3;
   ssl_ciphers           ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
   ssl_prefer_server_ciphers off;

    location / {
        proxy_pass https://doc.test.com; #伪装网址
        proxy_ssl_server_name on;
        proxy_redirect off;
        sub_filter_once off;
        sub_filter "doc.test.com" $server_name;
        proxy_set_header Host "doc.test.com";
        proxy_set_header Referer $http_referer;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header User-Agent $http_user_agent;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header Accept-Encoding "";
        proxy_set_header Accept-Language "zh-CN";
    }

    location /xxxxxxxx1 {
       proxy_redirect off;
       proxy_pass http://127.0.0.1:10086;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection "upgrade";
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   }
   location xxxxxxxx2 {
       proxy_redirect off;
       proxy_pass http://127.0.0.1:10087;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection "upgrade";
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   }
}
server {
    listen 80;
    server_name bing.test.com;    #你的域名
    rewrite ^(.*)$ https://${server_name}$1 permanent;
}
```