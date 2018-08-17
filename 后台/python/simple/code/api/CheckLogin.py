#!/usr/bin/evn python
# coding=utf-8

from bottle import  post
from common import web_helper

@post('/api/CheckLogin/')
def post_CheckLogin():
    # 验证当前页面是否登录入失效
    username = web_helper.get_form('username', '帐号')
    print(username)
    return web_helper.return_msg(0, '验证成功')