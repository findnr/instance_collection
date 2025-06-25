<!--
 * @Author: findnr
 * @Date: 2024-07-24 14:58:23
 * @LastEditors: findnr
 * @LastEditTime: 2024-07-24 15:24:11
 * @Description: 
-->
##### 开机启动软件
###### 首先写好一个.bat的批处理程序，程序中包涵程序的启动
- 第一种：使用nssm软件来实现（https://nssm.cc/）
```sh
# 执行下边的命令后在对话选择写的好.bat文件
nssm install server_name
# 管理服务的启动和停止使用net命令
net start server_name
net stop server_name
```
- 第二种：使用系统的计划与任务来实现，是创建基本任务
```sh
```
- 第三种：使用系统的计划与任务来实现，是创建任务（此方式可以设置更多的选项）