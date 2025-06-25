/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-03-12 18:10:26
 * @LastEditors: findnr
 * @LastEditTime: 2024-06-26 15:35:28
 * @FilePath: \instance_collection\docs\.vitepress\configsidebar\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import os from "./os"
import development from "./development"
import network from "./network"
import maxmodel from "./maxmodel"
import soft from "./soft"
import job from "./job"
import owndevel from "./owndevel"
const info = [...os,...development,...network,...maxmodel,...soft,...job,...owndevel]

const sidebar = {}
for (const k in info) {
  for (const ks in info[k]) {
    sidebar[ks] = info[k][ks]
  }
}
sidebar["/"] = []
const pathJoin = (data) => {
  let _sidebar = {};
  // 路径处理
  for (let k in data) {
    data[k].forEach((e) => {
      e.link = k + e.link;
      if (e.items) {
        let _chpath = e.link.replace(/\/index$/gi, '');
        e.items.forEach((item) => {
          // 补充路径
          item.link = _chpath + '/' + item.link;
        });
      }
    });

    _sidebar[k] = data[k];
  }
  return _sidebar;
};
const sidebars = pathJoin(sidebar);

export default function setSidebar() {
  // return sidebar
  return sidebar
}