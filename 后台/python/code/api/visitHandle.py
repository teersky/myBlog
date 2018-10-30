#!/usr/bin/evn python
# coding=utf-8

from bottle import get
from common import web_helper, encrypt_helper, db_helper, timeOut_helper
import time

import socket

@get('/api/visitHandle/')
def get_visit():
    timeOut_helper.fun_timer()
    ip_inner = web_helper.get_ip()
    ip_outer = web_helper.get_query("IP","ip_outer")
    province = web_helper.get_query('province', '省')
    city = web_helper.get_query('city', '市')
    district = web_helper.get_query('district', '区县')

    sql = """SELECT code FROM "cityInfomation" WHERE name = '%s' and "parentCode" = (select code from "cityInfomation" where name = '%s')""" % (district, city,)

    manager_result = db_helper.read(sql)
    # 判断用户记录是否存在
    code = manager_result[0].get('code', '').rstrip()

    sql_2 = """SELECT COUNT(1) FROM "visitRecode" WHERE  code='%s'"""%(code)
    recode_result = db_helper.read(sql_2)
    count = recode_result[0].get('count', '')
    if count > 0:

        sql = """
            UPDATE "visitRecode"
               SET valueindex=valueindex+1
            WHERE code='%s';
        """%(code)

        data = ()
        db_helper.write(sql, data)
    else:
        t = int(time.time())
        insert = """
              insert into "visitRecode" ("dateTime", "visitIP", "code", "ip_inner", valueIndex) 
              values (%s, %s, %s, %s, 1)
        """
        data = (t, ip_outer, code, ip_inner)
        db_helper.write(insert, data)

    return web_helper.return_msg(0, 'success')

