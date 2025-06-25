<!--
 * @Author: findnr
 * @Date: 2024-04-25 06:31:23
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-25 06:34:18
 * @Description: 
-->
#### vue去#号
```sh
server{
	list 80;
	server_name vue.test.com;
	location /{
		try_files $uri/ index.html;
		root /home/test
	}
}
```
#### 根据url地址不同请求不同的应用，也是去#号的
```sh
server{
	list 80;
	server_name vue.test.com;
	
	location /{
		try_files $uri/ index.html;
		root /home/test
	}
	location /dist{
		try_files $uri $uri/ /dist/index.html
		alias /home/test/dist/
	}
	location /vue{
		try_files $uri $uri/ /vue/index.hmtl
		alias /home/xh/vue/
	}
}
```