#!/usr/bin/python
#coding: utf-8

from bottle import post
from common import web_helper

@post('/apiPost/uploadArtical/')
def uploadArtical():
    uid = str(web_helper.get_form('id', '主键（时间戳）'))
    tit = web_helper.get_form('tit', '标题')
    txt = str(web_helper.get_form('txt', '内容'))
    tip = str(web_helper.get_form('tit', '标签'))
    newArt = str(web_helper.get_form('new', '是否是新文章'))
    print(uid, tit, newArt)
    return web_helper.return_msg(0, '上传成功')