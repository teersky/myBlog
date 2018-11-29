#!/usr/bin/evn python
# coding=utf-8

# ---  设备常量参数模块， 初始化各个模块 --- #
###############################################################
# 数据库参数 #
# 数据库名称
# DB_NAME = 'TestDB'
DB_NAME = 'blogDB'
# 数据库链接地址
DB_HOST = '192.168.0.138'
# 数据库端口
DB_PORT = 5432
# 数据库账号
DB_USER = 'postgres'
# 数据库登录密码
# DB_PASS = 'admin'
DB_PASS = 'postgres'

##################################################################################
### 邮件服务参数 ###
# 邮件服务器
SMTP = 'smtp.aliyun.com'
pop3 = "pop3.aliyun.com"
IMAP = "imap.aliyun.com"
# 邮件服务器端口
PORT = 465
# email发送账号
EMAIL_USER = "teersky@aliyun.com"
# email发送密码
EMAIL_PWD = '19950913zhd'
# 系统异常邮件通知地址，多个地址用逗号分隔
EMAIL_LIST = 'teersky@aliyun.com'
# 异常邮件通知标题
# ——由于我们有开发环境、测试环境、预生产环境、生产环境等多个不同的环境，
# ——所以在发送异常通知时如果区分的话，可能就弄不清是那个环境出了问题，
# ——我们可以通过设置邮件标题为：开发、测试、预生产、生产等标签来方便区分是那个环境发送的异常通知
EMAIL_ERR_TITLE = '系统异常通知-'


####  webSocket地址以及端口号
WSIP="127.0.0.1"
WSPORT = 9001