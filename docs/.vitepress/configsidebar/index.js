import os from "./os"
const info = [...os]
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