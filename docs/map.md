<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-03-13 20:41:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-03-14 06:24:35
 * @FilePath: \instance_collection\docs\map.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 本项目是基于vitepress构建
- 官网：https://vitepress.dev :tada: :100:
- 手册：https://vitepress.dev/zh/guide/what-is-vitepress :tada: :100:
- 书写的相关手册：https://vitepress.dev/zh/guide/markdown :tada: :100:
### 目录结构
```sh
docs                        //文档根目录
|----/.vitepress            //配制文件夹
|--------/confignav         //首页面导航内容展示
|--------/configsidebar     //详细页面中侧边导航内容
|--------/config.mjs        //最终的配制文件
|----/map.md                //文档的构建思路
|----/tools.md              //收集常用工具     
|----/web.md                //收集常用网站
|----/...                   //其它是内容文件夹
.gitignore
LICENSE
package.json
README.md
```
### 添加首页导航信息

```js
// 进入docs/.vitepress/confignav文件夹中
confignav
|----/index.js //此文件为引入导航信息、每新增一下新的导航要在此文件中引入此导航信息、引入后刷新页面就有了。
|----/...
//事例，这是index.js的内容
import os from "./os.js" //导入新导航

export default function setNav() {
    return [os] //在这里要引用就可以了
}
//事例os.js的内容
export default {
    text: "操作系统",
    items: [
        {
            text: 'openwrt', //显示的名称
            link: '/os/openwrt/' //在docs文件下创建相对应的文件路径
        },
        {
            text: 'ubuntu', 
            link: '/os/ubuntu/'
        }
        ,
        {
            text: 'win',
            link: '/os/win/'
        }
        ,
        {
            text: 'rockylinux',
            link: '/os/rockylinux/'
        }
    ]
}
//到这里导航就添加完成
```
### 添加详细页面中的侧面导航
```js
// 进入docs/.vitepress/configsidebar文件夹中
configsidebar
|----/index.js //此js文件是总的引入侧边导航，新增加一类侧边导航要里些文件中引入，引入后会自己创建路由信息
|----/os //os事例文件
|--------/index.js //单项类别引入侧边导航，如果单项有增加要在这里引入
|--------/...js //单项中更多的导航信息...
//事例，这是index.js的内容，内容只须在头部引入，其它内容是自己生成路由的代码，多项用,分开
import os from "./os"
import other from "./other"
const info = [...os,...other]
//事例，这是os/index.js的内容，内容只须在头部引入
import openwrt from "./openwrt"
import ubuntu from "./ubuntu"
import win from "./win"
import rockylinux from "./rockylinux"

export default [openwrt, ubuntu, win,rockylinux]
//事例，这是os/win.js的内容，内容只须在头部引入
export default {
    "/os/win/": [{
        text: 'win相关',//此单项导航首页的名称
        link: 'index', //链接的路径，是以单项为根往后添加
        items: [
            { text: '常用命令', link: 'commond' },//子项目名称各路径，路径是以父级为根的
            { text: 'win相关产品激活', link: 'activate' },
            { text: 'win gost安装系统', link: 'gost' },
        ]
    }]
}
//到这里导航就添加完成
```
### 添加详细内容页面
```sh
# 在docs目录下添加相对应的路径和文件就可以
docs
|----/os
|--------/win
|------------/index.md
|------------/commond.md
# 这样就可以实现一套完整的页面了
```