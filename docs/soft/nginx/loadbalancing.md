#### 配制和说明
- 轮询策略
- 将前端每个请求按顺序（时间顺序或者排列顺序）逐一分配到不同的后端节点上，对于出现问题的后端接口自动删除
```sh
upstream mysvr {
	server 192.168.1.80:7878;
	server 192.168.1.81:3333;
}
```
- 加权轮询策略
- 在基本的轮询策略上考虑各后端节点接收请求的权重，指定各后端节点被轮询到几率。
```sh
pstream mysvr {
	server 192.168.1.80:7878 weight=1;
	server 192.168.1.81:3333 weight=2;
}
```
- ip_hash
- 将前端的访问IP进行hash操作，然后根据hash结果将请求分配给不同的后端节点。通过Nginx的实现，每个前端访问IP会固定访问一个后端节点，可避免session共享的问题。
- 
```sh
upstream mysvr {
	server 192.168.1.80:7878;
	server 192.168.1.81:3333;
	ip_hash;
}
```
- 反向代理配制http
```sh
server {
    listen 80;
    server_name  test.test.com;
    location / {
      proxy_pass http://mysvr;
    }
```
- 反向代理配制https
```sh
server{
    listen 443 ssl;
    server_name test.test.com;
    ssl_certificate /path/cert.pem;
    ssl_certificate_key /path/key.pem;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    location / {
      proxy_pass http://mysvr;
    }
}
```
#### 说明
- url hash：扩展策略中的url hash在形式上和IP hash相近，不同之处在于，IP hash策略是对前端访问IP进行了hash操作，而url hash策略是对前端请求的url进行hash操作。url hash策略优点在于，如果后端有缓存服务器，它能够提高缓存效率，同时解决了session的问题；但其缺点是，如果后端节点出现异常，它不能自动排除该节点。
- fair：该模块将前端请求转发到一个最近负载最小的后台节点。Nginx通过后端节点对请求的响应时间来判断负载情况。响应时间短的节点负载相对就轻，得出判断结果后，Nginx就将前端请求转到到选中的负载最轻的节点。

