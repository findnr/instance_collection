### 路由器相关

#### 常用命令
```sh
#进入配制模式
system-view
#关闭信息提示 
undo info-center enable
#查看所有的配制信息
display current-configuration
#简单查看接口信息
display ip interface brief
#简单查看vlan信息
display vlan brief
```
#### 默认路由
- esay-ip方式：https://support.huawei.com/enterprise/zh/doc/EDOC1100130778/6753723e?idPath=24030814|21782164|7923148|250646625|250680948
```sh
#配制acl
acl 2000
rule 5 permit
#配制接口为dhcp
int g0/0/1
ip address dhcp-alloc
#
#配制默认路由
ip router 0.0.0.0 0.0.0.0 192.168.1.1
```
