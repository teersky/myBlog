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


------------------------------------------------------------------------
�����ݿ⵼����: database.sql

C:\Program Files\PostgreSQL\9.2\bin>pg_dump -h localhost -p 5432 -U postgres --column-inserts -t table_name -f d://save_sql.sql

�÷�:
? pg_dump [ѡ��]... [���ݿ�����]


һ��ѡ��:
? -f, --file=FILENAME ? ? ? ? ?����ļ���Ŀ¼��
? -F, --format=c|d|t|p ? ? ? ? ����ļ���ʽ (����, Ŀ¼, tar)
? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?���� (Ĭ��ֵ))
? -v, --verbose ? ? ? ? ? ? ? ?��ϸģʽ
? -V, --version ? ? ? ? ? ? ? ?����汾��Ϣ��Ȼ���˳�
? -Z, --compress=0-9 ? ? ? ? ? ��ѹ����ʽ��ѹ������
? --lock-wait-timeout=TIMEOUT ?�ڵȴ�������ʱ�����ʧ��
? -?, --help ? ? ? ? ? ? ? ? ? ��ʾ�˰���, Ȼ���˳�


�����������ѡ��:
? -a, --data-only ? ? ? ? ? ? ?ֻת������,������ģʽ
? -b, --blobs ? ? ? ? ? ? ? ? ?��ת���а��������
? -c, --clean ? ? ? ? ? ? ? ? ?�����´���֮ǰ���������ɾ�������ݿ����
? -C, --create ? ? ? ? ? ? ? ? ��ת���а�������,�Ա㴴�����ݿ�
? -E, --encoding=ENCODING ? ? ?ת����ENCODING��ʽ���������
? -n, --schema=SCHEMA ? ? ? ? ?ֻת��ָ�����Ƶ�ģʽ
? -N, --exclude-schema=SCHEMA ?��ת����������ģʽ
? -o, --oids ? ? ? ? ? ? ? ? ? ��ת���а��� OID
? -O, --no-owner ? ? ? ? ? ? ? �����ĸ�ʽ��, ���Իָ�����������


? -s, --schema-only ? ? ? ? ? ?ֻת��ģʽ, ����������
? -S, --superuser=NAME ? ? ? ? �����ĸ�ʽ��ʹ��ָ���ĳ����û���
? -t, --table=TABLE ? ? ? ? ? ?ֻת��ָ�����Ƶı�
? -T, --exclude-table=TABLE ? ?��ת��ָ�����Ƶı�
? -x, --no-privileges ? ? ? ? ?��Ҫת��Ȩ�� (grant/revoke)
? --binary-upgrade ? ? ? ? ? ? ֻ������������ʹ��
? --column-inserts ? ? ? ? ? ? �Դ���������INSERT������ʽת������
? --disable-dollar-quoting ? ? ȡ����Ԫ (����) ����, ʹ�� SQL ��׼����
? --disable-triggers ? ? ? ? ? ��ֻ�ָ����ݵĹ����н��ô�����
? --exclude-table-data=TABLE ? ��ת��ָ�����Ƶı��е�����
? --inserts ? ? ? ? ? ? ? ? ? ?��INSERT���������COPY�������ʽת������
? --no-security-labels ? ? ? ? ��ת����ȫ��ǩ�ķ���
? --no-tablespaces ? ? ? ? ? ? ��ת����ռ������Ϣ
? --no-unlogged-table-data ? ? ��ת��û����־�ı�����
? --quote-all-identifiers ? ? ?���б�ʶ�������ţ���ʹ���ǹؼ���
? --section=SECTION ? ? ? ? ? ?���������Ľ� (����ǰ, ����, �� ���ݺ�)
? --serializable-deferrable ? �ȵ����ݿ������쳣����
? --use-set-session-authorization
? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?ʹ�� SESSION AUTHORIZATION �������
? ? ? ? ? ? ? ? ALTER OWNER ��������������Ȩ


����ѡ��:
? -h, --host=������ ? ? ? ?���ݿ�����������������׽���Ŀ¼
? -p, --port=�˿ں� ? ? ? ?���ݿ�������Ķ˿ں�
? -U, --username=���� ? ? ?��ָ�������ݿ��û�����
? -w, --no-password ? ? ? ?��Զ����ʾ�������
? -W, --password ? ? ? ? ? ǿ�ƿ�����ʾ (�Զ�)
? --role=ROLENAME ? ? ? ? ?��ת��ǰ����SET ROLE


���û���ṩ���ݿ�����, ��ôʹ�� PGDATABASE ������������ֵ.
