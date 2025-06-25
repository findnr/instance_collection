### github中的api接口
- 中文文档地址：https://docs.github.com/zh/rest
### 案例
- 使用api接口获取仓库的基本信息
```sh
curl https://api.github.com/repos/{:owner}/{:repository}
#例如
curl https://api.github.com/repos/php/php-src
```