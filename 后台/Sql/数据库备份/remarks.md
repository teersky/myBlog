第一步:通过 cmd 进入到postgresql 安装目录的 bin 下:

windows : cd C:\PostgreSQL\pg95\bin

ubuntu :?cd /etc/postgresql/9.5/main

第二步:备份数据库

C:\PostgreSQL\pg95\bin>pg_dump?-h?164.82.233.54?-U?postgres?databasename?>?C:\databasename.bak??


-h：数据库服务器地址；

-p：数据库端口号；

-U：U 大写,表示用户名；

-d：数据库名称；

-f：把备份文件放在哪里；

第三步:还原数据库(前提:你要备份的数据库软件里面必须先创建一个数据库)


windows:

psql -h localhost -U postgres -d new_db? -f "C:/emoneysit.bak"

ubuntu:

psql -h localhost -U emmweb -d emmweb < /home/jianghai/Desktop/emmweb.bak?



-h：数据库服务器地址；

-p：数据库端口号；

-U：U 大写,表示用户名；

-d：数据库名称；

-f：备份文件路径以及备份文件名称；
