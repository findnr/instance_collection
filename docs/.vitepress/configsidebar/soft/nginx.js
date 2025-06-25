/*
 * @Author: findnr
 * @Date: 2024-04-21 14:47:38
 * @LastEditors: findnr
 * @LastEditTime: 2024-09-05 11:34:21
 * @Description: 
 */
/*
 * @Author: findnr
 * @Date: 2024-04-21 14:47:38
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-25 06:08:27
 * @Description: 
 */
export default {
    "/soft/nginx/": [{
        text: 'nginx相关',
        link: 'index',
        items: [
            { text: '安装', link: 'install' },
            { text: 'remi安装nginx配制实例', link: 'reminginx' },
            { text: '配制url重写index.php', link: 'writephp' },
            { text: 'swoole配制反向代理', link: 'swoole' },
            { text: '配制禁使用IP访问', link: 'noip' },
            { text: '配制负载均衡', link: 'loadbalancing' },
            { text: '配制vue相关', link: 'vue' },
            { text: '配制防盗链', link: 'nolink' },
            { text: '反向代理常见问题', link: 'reverse_proxy_question' },
        ]
    }]
}