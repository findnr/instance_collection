<!--
 * @Author: findnr
 * @Date: 2024-04-13 21:32:37
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-13 21:47:21
 * @Description: 
-->
#### linux查看发行版本
- 如果是基于redhat的发行版本可以使用
```sh
cat /etc/redhat-release
```
- 如果是其它linux可以使用以下命令，里面包含了发行版本信息
```sh
cat /proc/version
```
#### linux查看内核版本的两种方法
- 第一种
```sh
cat /proc/version
```
- 第二种
```sh
uname -a
```