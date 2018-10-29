#!/usr/bin/evn python
# coding=utf-8

from bottle import get, response
from common import web_helper, db_helper


@get('/apiGet/dataInterface/')
def datainterface():
    # 数据接口
    str = '-1'
    b_Tip = 1
    sql = """select * from public.naviList order by id"""
    manager_result = db_helper.read(sql)
    result = []
    for l in manager_result:
        if l.get('father_Link').strip() == str.strip():
            result.append(l)
        elif l.get('father_Link').strip() != str.strip():
            for j in result:
                if j.get("linkTo").strip() == l.get("father_Link", 0).strip():
                    if b_Tip == 1:
                        b_Tip+=1
                        j.update(child=[])
                    j.get('child').append(l)
    return web_helper.return_msg(2, '数据接口页面', result)