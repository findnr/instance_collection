<!--
 * @Author: findnr
 * @Date: 2024-03-30 21:55:14
 * @LastEditors: findnr
 * @LastEditTime: 2024-03-30 22:06:15
 * @Description: 
-->
### nvm安装
- linux版本：https://github.com/nvm-sh/nvm
- windows版本：https://github.com/coreybutler/nvm-windows
### 常用命令集合
```sh
nvm list #查看已经安装的版本
nvm list installed #查看已经安装的版本
nvm list available #查看网络可以安装的版本
nvm version #查看当前的版本
nvm install #安装最新版本
nvm nvm use <version> ## 切换使用指定的版本
nvm ls #列出所有版本 
nvm current #显示当前版本
nvm alias <name> <version> ## 给不同的版本号添加别名
nvm unalias <name> ## 删除已定义的别名
nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm on #打开nodejs控制
nvm off #关闭nodejs控制
nvm proxy #查看设置与代理
nvm node_mirror [url] #设置或者查看setting.txt中的node_mirror，如果不设置的默认是 Index of /dist/
nvm npm_mirror [url] #设置或者查看setting.txt中的 npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/
nvm uninstall <version> #卸载制定的版本
nvm use [version] [arch] #切换制定的node版本和位数
nvm root [path] #设置和查看root路径
```
