#!/usr/bin/python
#coding: utf-8

from bottle import post, get, route, run, request
from common import log_helper, web_helper
import base64

@get('/apiGet/uploadImage/')
@post('/apiPost/uploadImage/')
def uploadImage():
    """保存文章上传的图片"""

    upload_image = str(web_helper.get_form('image', '图片')).replace(" ", "+")
    upload_time = web_helper.get_form('times', '时间戳')
    save_path = "./static/images/mduploadImg/" + upload_time + ".png"

    imgdata = base64.b64decode(upload_image)
    file = open(save_path, 'wb')
    file.write(imgdata)
    file.close()

    return web_helper.return_msg(0, '登录成功')

def filePutContents(file, content):
    with open(file, 'wb')as fp:
        fp.write(content)