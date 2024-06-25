#### 进程相关
- pstree (查看进程树)
```sh
#安装
dnf install psmisc
#使用
#参数	说明
#-p	显示进程的PID
#-u	显示进程的user
#-V	显示pstree的版本信息
#-p pid	显示进程号为pid的进程信息
#-u user	显示用户名为user的进程信息
########    举例
pstree -p
```
