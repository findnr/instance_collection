<!--
 * @Author: findnr
 * @Date: 2024-04-07 14:36:02
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-07 14:40:15
 * @Description: 
-->
### 注册一个帐号
网址：https://freessl.cn/
创建ssl
*.test.com
*.sss.test.com
sss.test.com
### 添加好后在域名管理系统中使用CNAME的模式按ACME的DCV进行解析

### 安装ACME自动化脚本：https://blog.freessl.cn/acme-quick-start/
```sh
curl https://get.acme.sh | sh -s email=my@example.com
```

### 使用软连接使用脚本命令可全局使用
```sh
ln -s /root/.acme.sh/acme.sh /usr/bin/acme.sh
```

### 生成ssl证书命令（按ACME部署执行一致的命令）
```sh
acme.sh --issue -d *.test.com  --dns dns_dp --server https://acme.freessl.cn/v2/DV90/directory/fdsafdsafdsafdsaf
```

### 执行命令自动更新脚本apache
```sh
acme.sh --install-cert -d example.com --cert-file /path/to/certfile/in/apache/cert.pem --key-file  /path/to/keyfile/in/apache/key.pem --fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem --reloadcmd "systemctl reload httpd"
```

### 执行命令自动更新脚本nginx
```sh
# 如果域名是*.test.com 时*号要转义 \*
acme.sh --install-cert -d example.com --key-file /path/to/keyfile/in/nginx/key.pem  --fullchain-file /path/to/fullchain/nginx/cert.pem  --reloadcmd "systemctl reload nginx"
```
```sh
acme.sh --upgrade    # 手动升级

acme.sh --upgrade --auto-upgrade    # 自动升级

acme.sh --upgrade --auto-upgrade 0  # 停止自动升级

### 删除信息
acme.sh --remove -d sss.test.com

### 查看
acme.sh --list
```
