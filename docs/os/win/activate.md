<!--
 * @Author: findnr
 * @Date: 2024-05-26 06:58:29
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-26 06:58:44
 * @Description: 
-->
### win激活
win 密钥，官网地址：https://docs.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys
### office激活
office 密钥，官网地址：https://docs.microsoft.com/zh-cn/deployoffice/vlactivation/gvlks
### openwrt kms激活
```shell
#以管理员的身份运行命令（激活win系统）
#卸载原有密钥
slmgr /upk
#设置 KMS 服务器地址
slmgr /skms 192.168.1.1
#安装 KMS 密钥
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
#查看激活状态每隔 180 天会自动续订，不需要担心激活过期
slmgr /ato
```
### 激活 Office
```shell
#以管理员的身份运行命令poweshell（激活win系统）
#office 安装目录中找到ospp.vbs所在的文件夹是执行这个命令
cscript ospp.vbs /sethst:192.168.1.1
#安装 KMS 密钥
cscript ospp.vbs /inpkey:XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99
#激活已安装的 Office 密钥
cscript ospp.vbs /act
#查看激活状态
slmgr /ato SKUID
```
