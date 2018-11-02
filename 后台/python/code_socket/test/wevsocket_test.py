#!/usr/bin/evn python
# coding=utf-8

import threading
import unittest
from common import websocket_helper, mail_helper

def fun_timer():
    websocket_helper.sendMessage("Hello， would")
    global timer
    timer = threading.Timer(5, fun_timer)
    timer.start()

if __name__ == '__main__':
    fun_timer()
    # socket = websocket_helper.new_websocket()
    # server = socket.begin()

