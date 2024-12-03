<!--
 * @Author: findnr
 * @Date: 2024-09-05 11:34:26
 * @LastEditors: findnr
 * @LastEditTime: 2024-10-30 14:49:20
 * @Description: 
-->
###### 提示错误:NET::ERR_INCOMPLETE_CHUNKED_ENCODING 200 (OK) 提示错误：net::ERR_CONTENT_LENGTH_MISMATCH
- 错误原因分析:
- 1.nginx配置缓存区设置过小
- 2.nginx的临时目录（/proxy_temp）过大或没有权限写入缓存文件
- 3.磁盘空间不足
- 解决办法1:在nginx中的对应的反向代理配置如下内容，即可解决:
```json
location /test {
    proxy_pass http://127.0.0.1:9999/;
    proxy_buffer_size 1024k;
    proxy_buffers 16 1024k;
    proxy_busy_buffers_size 2048k;
    proxy_temp_file_write_size 2048k;
}
```
- 解决办法2:在nginx中的对应的反向代理配置如下内容，即可解决:（关闭代理）
```json
location /test {
    proxy_pass http://127.0.0.1:9999/;
    proxy_buffering off;
}
```
##### 提示代理出现500的情况，就是缓存的目录权限不足(单测接口没有问题，使用用反向代理出问题)
- 解决办法
```sh
# 修改目录权限
chmod 777 /var/cache/nginx/proxy_temp -R
```