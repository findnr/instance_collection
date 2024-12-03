##### 查看硬盘
- 查看硬盘数量
```sh
# 查看简要信息
lsblk
# 查看详细信息
fdisk -l
```
- 查看硬盘的空间情况
```sh
df -lh
```
##### 格式化硬盘
- 格式硬盘方式有：fdisk、parted、gparted
###### 使用fdisk格式化硬盘
```sh
fdisk /dev/sdb
: '出现下列提示：
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.
中文意思：
更改将只保留在内存中，直到您决定写入它们。
使用write命令前请谨慎。
'
# 可能使用m来调出帮助
: '
DOS (MBR)
   a   toggle a bootable flag （切换可引导标志）
   b   edit nested BSD disklabel （编辑嵌套的BSD磁盘标签）
   c   toggle the dos compatibility flag （切换DOS兼容性标志）

Generic
   d   delete a partition （删除分区）
   F   list free unpartitioned space （列出空闲的未分区空间）
   l   list known partition types （列出已知的分区类型）
   n   add a new partition （添加新分区）
   p   print the partition table （打印分区表）
   t   change a partition type （不要更改分区类型）
   v   verify the partition table（验证分区表）
   i   print information about a partition （打印有关分区的信息）

Misc
   m   print this menu （打印这个菜单）
   u   change display/entry units （改变显示/输入单位）
   x   extra functionality (experts only) （额外功能（仅限专家使用））

Script
   I   load disk layout from sfdisk script file （从sfdisk脚本文件加载磁盘布局）
   O   dump disk layout to sfdisk script file （将磁盘布局转储到sfdisk脚本文件）

Save & Exit
   w   write table to disk and exit （将表写入磁盘并退出）
   q   quit without saving changes （不保存更改就退出）

Create a new label
   g   create a new empty GPT partition table （创建一个新的空GPT分区表）
   G   create a new empty SGI (IRIX) partition table（创建一个新的空SGI （IRIX）分区表）
   o   create a new empty MBR (DOS) partition table（创建一个新的空MBR （DOS）分区表）
   s   create a new empty Sun partition table （创建一个新的空的Sun分区表）
'
```
###### 具体的格式步骤
```sh
#第一步：
fdisk /dev/sdb
#第二步：删除分区表
d
#第三步：创建分区
n
#第四步：选择扩展分区
e
#第五步：根据需要填写容量就可以了
#第六步：更改硬盘格式为ext4(分区有几个就格式化几次)
mkfs.ext4 /dev/sdb1
#第七步：挂载硬盘到批定文件下
mount /dev/sdb1 /mnt/sdb1
```
