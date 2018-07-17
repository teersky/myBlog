1.stop mysql service
net stop mysql

2,运行cmd,切换到mysql的bin目录，运行命令
mysqld --defaults-file="C:\Program Files\MySQL\MySQL Server 5.1\my.ini" --console --skip-grant-tables

3.打开第二个cmd2窗口，连接mysql,提示输入密码时，直接回车
mysql -u root -p

4.查看数据库，切换数据库
show databases; 
use mysql;

5.更改root密码
UPDATE user SET Password=PASSWORD('newpassword') where USER='root';

6.刷新权限,退出重新登录
FLUSH PRIVILEGES;