/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-03-07 15:33:13
 * @LastEditors: findnr
 * @LastEditTime: 2024-06-26 20:12:40
 * @FilePath: \instance_collection\docs\.vitepress\config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'
import setNav from "./confignav"
import setSidebar from "./configsidebar"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base:'./',
  title: "收集开发用到的相关内容",
  description: "收集开发用到的相关内容",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: setNav(),
    sidebar: setSidebar(),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2024 cym findnr'
    },
    lastUpdatedText: '最后更新时间',
    editLink: {
      pattern: 'https://github.com/findnr/instance_collection/blob/main/docs/:path',
      text: '编辑这个页面'
    },
    outline: 'deep',
    outlineTitle: '选择可跳转',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
  },
  appearance: 'dark',
  lang: 'zh-CN',
  lastUpdated: true
})
