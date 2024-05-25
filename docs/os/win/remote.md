#####
- 第一步：使用cmd命令终端输入下面的命令打开窗口
```sh
gpedit.msc
```
- 第二步：计算机配制->管理模板->windows组件->远程桌面服务->远程桌面会话主机->连接->远程桌面服务用户限制到单独的远程桌面服务会话：设置为禁用
- 第三步：计算机配制->管理模板->windows组件->远程桌面服务->远程桌面会话主机->连接->限制连接的数量：设置为启用，并填入可使用的远程用户数量
- 第四步：计算机配制->管理模板->windows组件->远程桌面服务->远程桌面会话主机->连接->许用户通过使用远程桌面服务进行远程连接：设置为启用
- 第五步：使用cmd命令终端输入下面的命令打开控制面板窗口
```sh
control
```
- 第六步：系统和安全->系统->远程桌面：设置为开或者启用
- 第七步：下载RDPWrap的zip包然后解压（注意新建一个文件夹）：https://github.com/stascorp/rdpwrap/releases
- 第八步：使用install.bat安装，再使用update.bat进行更新，最后使用RDPConf.exe进行查看，是否是绿色的提示（绿色的可行，红色的不行）
- 第九步：如果是红色的才操作，打开链接：https://raw.githubusercontent.com/sebaxakerhtc/rdpwrap.ini/master/rdpwrap.ini （把内容覆盖：C:\Program Files\RDP Wrapper\rdpwrap.ini）
- 第十步：重启电脑，这样就可以一个帐户多人使用或者是多个帐户多人使用，相互不影响。

