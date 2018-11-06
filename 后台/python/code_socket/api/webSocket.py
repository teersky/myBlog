#!/usr/bin/env python
# -*- coding:utf-8 -*-
from bottle import get, run

users = set()   # 连接进来的websocket客户端集合
@get('/api/websocket/')
def chat():
   print("aaa")