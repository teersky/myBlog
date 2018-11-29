#!/usr/bin/python
#coding: utf-8

from bottle import get, post, request
from common import web_helper, db_helper
import base64

@post('/apiPost/uploadArtical/')
def uploadArtical():
    uid = web_helper.get_form('id', '主键（时间戳）')
    tit = str(base64.b64decode(web_helper.get_form('tit', '标题').replace(" ", "+")), "utf-8")
    txt = web_helper.get_form('txt', '内容').replace(" ", "+")
    tip = str(base64.b64decode(web_helper.get_form('tip', '标签').replace(" ", "+")), "utf-8")
    newArt = web_helper.get_form('new', '是否是新文章')
    if("n" == newArt):
        insert = """
             insert into "articaltable" ("id", "artical_name", "artical_type", "likesnum", "answernum", "readnum", "artical") 
             values (%s, %s, %s, 0, 0, 0, %s)
        """
        data = (uid, tit, tip, txt)
        beTip = db_helper.write(insert, data)
    else:
        updata = """
            UPDATE "articaltable" 
            SET "artical_name"= %s, "artical_type"= %s, "artical" = %s  
            WHERE id=%s;
        """
        data = (tit, tip, txt, uid)
        beTip = db_helper.write(updata, data)
    print(beTip, uid, tit, txt, tip)
    return web_helper.return_msg(-1 if (beTip == "False")  else 0, '上传成功')

@get('/apiGet/ArticalList/')
def ArticalList():
    selectArticalList = """
       select "id", "artical_name", "artical_type", "likesnum", "answernum", "readnum" from "articaltable"
    """
    recode_result = db_helper.read(selectArticalList)
    print(recode_result)
    return web_helper.return_msg(0, '获取成功', recode_result)

@get('/apiGet/articalShow/')
def ArticalOnly():
    uid = web_helper.get_query('id', '主键（时间戳）')
    print("uid", uid)
    selectThisArtical = """
       select "artical_name", "artical_type", "likesnum", "answernum", "readnum", "artical" from "articaltable" where id = '%s'
    """%(uid)
    recode_result = db_helper.read(selectThisArtical)
    return web_helper.return_msg(0, '查询成功', recode_result)

@post('/apiPost/deleteArtical/')
def deleteArtical():
    uid = web_helper.get_form('uid', '主键（时间戳）')
    deleteArtical = """
        delete from "articaltable" where id = %s
    """
    data = (uid,)
    beTip = db_helper.write(deleteArtical, data)
    if beTip == "False":
        return web_helper.return_msg(-1, '删除失败',)
    else:
        selectArticalList = """
               select "id", "artical_name", "artical_type", "likesnum", "answernum", "readnum" from "articaltable"
            """
        recode_result = db_helper.read(selectArticalList)
        return web_helper.return_msg(0, '删除成功', recode_result)