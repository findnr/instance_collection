<!--
 * @Author: findnr
 * @Date: 2024-05-05 07:10:38
 * @LastEditors: findnr
 * @LastEditTime: 2024-05-05 08:11:30
 * @Description: 
-->
#### 获取指定文件的源码
- 获取并执行源码，两种方式任选其一
```sh
curl -o- https://raw.githubusercontent.com/{:owner}/{:repository}/main/install.sh | bash
wget -qO- https://raw.githubusercontent.com/{:owner}/{:repository}/main/install.sh | bash
```
- 下载到本地，两种方式任选其一
```sh
curl https://raw.githubusercontent.com/{:owner}/{:repository}/main/install.sh > install.sh
wget https://raw.githubusercontent.com/{:owner}/{:repository}/main/install.sh > install.sh
```
#### 重置仓库到原来的版本
```sh
git reset --hard
```
