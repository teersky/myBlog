#!/usr/bin/evn python
# coding=utf-8

import base64

s = "自行车v便不能盲目"

bs = str(base64.b64encode(s.encode("utf-8")), "utf-8")
print(bs) # 去掉编码结果前的 b

bbs = str(base64.b64decode(bs), "utf-8")
print(bbs) # 解码