#!/usr/bin/evn python
# coding=utf-8

from bottle import get, post
from common import web_helper


@get('/api/testFNS/')
@post('/api/testFNS/')
def get_test():

    data = [{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}]
    return web_helper.return_msg(0, '成功', data)