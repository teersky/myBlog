#!/usr/bin/evn python
# coding=utf-8

from bottle import  post
from common import web_helper

@post('/apiPost/CheckLogin/')
def post_CheckLogin():
    # 验证当前页面是否登录入失效

    s = web_helper.get_session()
    userName = s.get('login_name')
    if userName != "":
        return web_helper.return_msg(0, '验证成功')
    else:
        return web_helper.return_msg(-1, '用户未登录')