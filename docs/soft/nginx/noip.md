### 配制禁使用ip访问
- 配制https
```sh
server{
        listen 443 ssl default_server;
        server_name _;
        ssl_certificate /path/cert.pem;
        ssl_certificate_key /path/key.pem;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        #add_header Access-Control-Allow-Origin *;
        #add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        #add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
        return 403;
}
```
- 配制http
```sh
server{
        listen 80 default_server;
        server_name _;
        return  403;
}
```