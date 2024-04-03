#### 通过命令导出查询数据到txt文档
```sql
mysql -uroot -p
use test
SELECT * FROM test INTO OUTFILE '/tmp/test.txt';
```