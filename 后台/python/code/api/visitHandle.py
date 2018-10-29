#!/usr/bin/evn python
# coding=utf-8

from bottle import get
from common import web_helper, encrypt_helper, db_helper

import socket

@get('/api/visitHandle/')
def get_visit():
    str = web_helper.get_ip();
    csock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    csock.connect(('8.8.8.8', 80))
    (addr, port) = csock.getsockname()
    csock.close()
    print(addr)
    print(port)
    return web_helper.return_msg(0, '登录成功')