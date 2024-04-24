<!--
 * @Author: findnr
 * @Date: 2024-04-25 06:47:49
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-25 06:52:37
 * @Description: 
-->
#### 配制
- 假设您要保护.jpg、.pdf、.png文件
```sh
server {
    listen 80;
    server_name example.com;

    location ~* ^/(.*\.jpg|.*\.pdf|.*\.png)$ {
        valid_referers none blocked example.com *.example.com;
        if ($invalid_referer) {
            return 403;
        }
        root /var/www/example.com;
    }
}
```
#### 说明
- 在这个示例配置中，~* ^/(.*\.jpg|.*\.pdf)$是一个正则表达式，匹配以.jpg或.pdf结尾的所有URL。然后，NGINX会根据请求的URL匹配对应的location块，并根据其中的valid_referers指令来判断请求是否来自允许的来源。
- 如果请求的Referer头部信息不在允许的来源列表中，NGINX会返回403 Forbidden状态码，拒绝访问。
- 请注意，这只是一个示例配置。您可以根据您的实际需求修改正则表达式来匹配其他类型的文件或特定的URL路径。