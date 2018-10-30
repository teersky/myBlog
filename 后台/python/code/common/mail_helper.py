#!/usr/bin/evn python
# coding=utf-8

import smtplib, poplib
from email.mime.text import MIMEText
from traceback import format_exc
from config import const

import email
from email.parser import Parser
from email.header import decode_header
from email.utils import parseaddr


# 初始化邮件参数
smtp = const.SMTP
pop3 = const.pop3
port = const.PORT
user = const.EMAIL_USER
passwd = const.EMAIL_PWD
email_list = const.EMAIL_LIST
err_title = const.EMAIL_ERR_TITLE


def send_mail(subject, context, to_list):
    '''
    发送邮件
    接收参数：
    subject 邮件主题
    context 邮件内容
    to_list 接收者邮件列表，每个邮件地址用","分隔
    '''
    if not subject or not context or not to_list:
        return '邮件发送失败，邮件主题、内容与收件人邮件都是必填项'

    # 初始始化邮件相关参数
    email = MIMEText(context, 'html', 'utf-8')
    email['To'] = to_list
    email['Subject'] = subject
    email['From'] = user

    # QQ邮箱改为ssl方式发送了
    # s = smtplib.SMTP(smtp)
    s = smtplib.SMTP_SSL(smtp)
    try:
        s.login(user, passwd)
        s.sendmail(user, to_list, email.as_string())
        s.close()
        return None
    except Exception as e:
        s.close()
        stacktrace = format_exc()
        return '邮件发送失败，出现异常：' + str(e.args) + stacktrace + '\n'


def send_error_mail(context):
    '''
    发送邮件
    接收参数：
    context 邮件内容
    '''
    if not context:
        return '邮件内容是必填项'

    send_mail(err_title, context, email_list)


def guess_charset(msg):
    charset = msg.get_charset()
    if charset is None:
        content_type = msg.get('Content-Type', '').lower()
        pos = content_type.find('charset=')
        if pos >= 0:
            charset = content_type[pos + 8:].strip()
    return charset

def decode_str(s):
    value, charset = decode_header(s)[0]
    if charset:
        value = value.decode(charset)
    return value

def print_info(msg, indent=0):
    if indent == 0:
        for header in ['From', 'To', 'Subject']:
            value = msg.get(header, '')
            if value:
                if header == 'Subject':
                    value = decode_str(value)
                else:
                    hdr, addr = parseaddr(value)
                    name = decode_str(hdr)
                    value = u'%s <%s>' % (name, addr)
            print('%s%s: %s' % ('  ' * indent, header, value))
    if (msg.is_multipart()):
        parts = msg.get_payload()
        for n, part in enumerate(parts):
            print('%spart %s' % ('  ' * indent, n))
            print('%s--------------------' % ('  ' * indent))
            print_info(part, indent + 1)
    else:
        content_type = msg.get_content_type()
        if content_type == 'text/plain' or content_type == 'text/html':
            content = msg.get_payload(decode=True)
            charset = guess_charset(msg)
            if charset:
                content = content.decode(charset)
            print('%sText: %s' % ('  ' * indent, content + '...'))
        else:
            print('%sAttachment: %s' % ('  ' * indent, content_type))

def get_mail():
    server = poplib.POP3(pop3)
    # server.set_debuglevel(1)
    print(server.getwelcome())
    # 认证:
    server.user(user)
    server.pass_(passwd)
    print('Messages: %s. Size: %s' % server.stat())
    resp, mails, octets = server.list()
    # 获取最新一封邮件, 注意索引号从1开始:
    resp, lines, octets = server.retr(len(mails))
    # 解析邮件:
    msg = Parser().parsestr('\r\n'.join(lines))
    # 打印邮件内容:
    print_info(msg)
    # 慎重:将直接从服务器删除邮件:
    # server.dele(len(mails))
    # 关闭连接:
    server.quit()

