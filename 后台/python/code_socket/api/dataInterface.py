#!/usr/bin/evn python
# coding=utf-8

from bottle import get, response
from common import web_helper, db_helper
from service import scanEmail


@get('/apiGet/dataInterface/')
def datainterface():

    result = []

    return web_helper.return_msg(2, '数据接口页面', result)
