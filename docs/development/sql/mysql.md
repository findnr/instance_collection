<!--
 * @Author: findnr
 * @Date: 2024-04-03 14:20:00
 * @LastEditors: findnr
 * @LastEditTime: 2024-07-23 10:01:11
 * @Description: 
-->
#### 通过命令导出查询数据到txt文档
```sql
mysql -uroot -p
use test
SELECT * FROM test INTO OUTFILE '/tmp/test.txt';
```
#### 数据库横向相加，变成新的一列表
```sql
SELECT test_value1+test_value2 as temp_name FROM test WHERE test_value1+test_value2 >= 60
/*例如
SELECT name,id_car,uuid,status,type_id FROM `test` WHERE (status=0 OR status=1) AND is_new=2 AND score+other >= 60 AND uuid != ""
*/
```