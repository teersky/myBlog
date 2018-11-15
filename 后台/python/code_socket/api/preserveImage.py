#!/usr/bin/python
#coding: utf-8

from io import BytesIO
from bottle import get, response, post, put
from common import verify_helper, log_helper, web_helper

@put('/apiGet/uploadImage/')
@post('/apiGet/uploadImage/')
def uploadImage():
    """生成验证码图片"""
    upload_image = web_helper.get_form('image', '图片')
    print(upload_image)
    return web_helper.return_msg(0, '登录成功')