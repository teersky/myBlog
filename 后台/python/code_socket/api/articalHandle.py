#!/usr/bin/python
#coding: utf-8

from bottle import get, post, request
from common import web_helper, db_helper
import base64

@post('/apiPost/uploadArtical/')
def uploadArtical():
    uid = web_helper.get_form('id', '主键（时间戳）')
    tit = str(base64.b64decode(web_helper.get_form('tit', '标题').replace(" ", "+")), "utf-8")
    txt = str(base64.b64decode(web_helper.get_form('txt', '内容').replace(" ", "+")), "utf-8")
    tip = str(base64.b64decode(web_helper.get_form('tip', '标签').replace(" ", "+")), "utf-8")
    newArt = web_helper.get_form('new', '是否是新文章')
    if("n" == newArt):
        insert = """
             insert into "articalTable" ("id", "artical_name", "artical_type", "likesNum", "answerNum", "readNum", "artical") 
             values (%s, %s, %s, 0, 0, 0, %s)
        """
        data = (uid, tit, tip, txt)
        db_helper.write(insert, data)
    print(uid, tit, txt, tip)
    return web_helper.return_msg(0, '上传成功')

@get('/apiGet/ArticalList/')
def ArticalList():
    selectArticalList = """
       select "id", "artical_name", "artical_type", "likesNum", "answerNum", "readNum" from "articalTable"
    """
    recode_result = db_helper.read(selectArticalList)
    print(recode_result)
    return web_helper.return_msg(0, '获取成功', recode_result)

@get('/apiGet/articalShow/')
def ArticalList():
    uid = web_helper.get_query('id', '主键（时间戳）')
    print("uid", uid)
    selectThisArtical = """
       select "artical_name", "artical_type", "likesNum", "answerNum", "readNum", "artical" from "articalTable" where id = '%s'
    """%(uid)
    recode_result = db_helper.read(selectThisArtical)
    print(recode_result)
    return web_helper.return_msg(0, '查询成功', recode_result)