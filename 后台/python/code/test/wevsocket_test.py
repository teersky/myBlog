#!/usr/bin/evn python
# coding=utf-8

import unittest
from common import websocket_helper


if __name__ == '__main__':
    socket = websocket_helper.new_websocket()
    server= socket.begin()
    # server.sendMessage("aaa");
