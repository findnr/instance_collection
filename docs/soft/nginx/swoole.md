### swoole配制反制代理
- 配制https
```sh
server{
        listen 443 ssl;
        server_name test.test.com;
        ssl_certificate /path/totalcert.pem;
        ssl_certificate_key /path/totalkey.pem;
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        location / {
                proxy_set_header X-Real-Ip $remote_addr;
                proxy_set_header X-Frowarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-Nginx-Proxy true;
                proxy_set_header Connection "";
                proxy_pass      http://127.0.0.1:50000;
                proxy_http_version 1.1;
        }
}
```
- 配制http
```sh
server{
        listen 80;
        server_name test.test.com;
        location / {
                proxy_set_header X-Real-Ip $remote_addr;
                proxy_set_header X-Frowarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-Nginx-Proxy true;
                proxy_set_header Connection "";
                proxy_pass      http://127.0.0.1:50000;
                proxy_http_version 1.1;
        }
}
```