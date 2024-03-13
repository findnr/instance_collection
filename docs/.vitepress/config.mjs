/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-03-07 15:33:13
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-03-13 20:38:47
 * @FilePath: \instance_collection\docs\.vitepress\config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'
import setNav from "./confignav"
import setSidebar from "./configsidebar"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "收集开发用到的相关内容",
  description: "收集开发用到的相关内容",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: setNav(),
    sidebar: setSidebar(),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2024 cym findnr'
    },
    lastUpdatedText: '最后更新时间',
    editLink: {
      pattern: 'https://github.com/findnr/old_dev_doc/blob/main/docs/:path',
      text: '编辑这个页面'
    },
    outline: 'deep',
    outlineTitle: '这是浏览目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
  },
  appearance: true,
  lang: 'zh-CN',
  lastUpdated: true
})
