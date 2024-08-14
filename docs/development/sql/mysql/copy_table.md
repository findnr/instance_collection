<!--
 * @Author: findnr
 * @Date: 2024-08-14 11:10:04
 * @LastEditors: findnr
 * @LastEditTime: 2024-08-14 11:15:57
 * @Description: 
-->
#### 复制表结构
```sql
CREATE TABLE IF NOT EXISTS `table_name_new` like `table_name_old`
```
#### 复制表结构和数据
```sql
CREATE TABLE IF NOT EXISTS `table_name_new` SELECT * FROM `table_name_old`
```
#### 复制数据到指定表
```sql
INSERT INTO `table_name_new` SELECT * FROM `table_name_old`
```
#### 复制指定数据字段到指定的表字段
```sql
INSERT INTO `table_name_new` (name1, name2) select name1,name2 from `table_name_old`
```