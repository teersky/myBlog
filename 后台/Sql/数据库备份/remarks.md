��һ��:ͨ�� cmd ���뵽postgresql ��װĿ¼�� bin ��:

windows : cd C:\PostgreSQL\pg95\bin

ubuntu :?cd /etc/postgresql/9.5/main

�ڶ���:�������ݿ�

C:\PostgreSQL\pg95\bin>pg_dump?-h?164.82.233.54?-U?postgres?databasename?>?C:\databasename.bak??


-h�����ݿ��������ַ��

-p�����ݿ�˿ںţ�

-U��U ��д,��ʾ�û�����

-d�����ݿ����ƣ�

-f���ѱ����ļ��������

������:��ԭ���ݿ�(ǰ��:��Ҫ���ݵ����ݿ������������ȴ���һ�����ݿ�)


windows:

psql -h localhost -U postgres -d new_db? -f "C:/emoneysit.bak"

ubuntu:

psql -h localhost -U emmweb -d emmweb < /home/jianghai/Desktop/emmweb.bak?



-h�����ݿ��������ַ��

-p�����ݿ�˿ںţ�

-U��U ��д,��ʾ�û�����

-d�����ݿ����ƣ�

-f�������ļ�·���Լ������ļ����ƣ�
