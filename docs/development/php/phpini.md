<!--
 * @Author: findnr
 * @Date: 2024-04-07 20:03:36
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-07 20:05:15
 * @Description: 
-->
### 常用的配制项
- 是否允许通过HTTP上传文件的开关
```ini
file_uploads = on
```
- 允许上传文件的最大体积
```ini
upload_max_filesize = 2M
```
- 一次度请求最多能上传文件个数
```ini
max_file_uploads = 20
```
- 表单提交上传的最大体积
```ini
post_max_size = 8M
```
- 表单提交上传的最大体积
```ini
post_max_size = 8M
```
- 每个PHP页面运行的最大时间值(秒)，默认30(s)
```ini
max_execution_time = 30
```
- 每个PHP页面接收数据所需的最大时间，默认60秒
```ini
max_input_time=60
```
- 每个PHP页面所吃掉的最大内存，默认8M
```ini
memory_limit = 8m
```