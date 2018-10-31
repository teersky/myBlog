# coding: utf8

import poplib
from email.parser import Parser
import base64
import re
from config import const

useraccount = const.EMAIL_USER
password = const.EMAIL_PWD
pop3_server = const.pop3

class MailInfo(object):
    """
    用于临时保存邮件信息的类
    """
    def __init__(self):
        self.index = 0
        self.size = 0
        self.status = ""
        self.data = ""
        # self.details = None


class MailDetails(object):
    """
    包括邮件的发件人的昵称， 发件人的账号
    收件人的昵称，收件人的账号
    信件的主题
    信件发送到服务器上的时间
    信件的正文
    """
    def __init__(self):
        self.from_nickname = ""
        self.from_account  = ""
        self.to_nickname = ""
        self.to_account = ""
        self.subject = ""
        self.receivedtime = ""
        self.text_content = ""
        self.html_content = ""


def get_parsed_msg(debuglevel=1):
    """
    :param useraccount: 邮件用户名
    :param password:    邮件接收授权码
    :param limits:      要接收的信件数目. 默认按时间最新排序
    :return:            email.message.Message对象。已是被解析过的数据，可使用Message对象的api方法进一步操作。
    """
    # 开始连接到服务器
    server = poplib.POP3(pop3_server)
    # 可选项： 打开或者关闭调试信息，1为打开，会在控制台打印客户端与服务器的交互信息
    server.set_debuglevel(debuglevel)
    # 可选项： 打印POP3服务器的欢迎文字，验证是否正确连接到了邮件服务器
    print(server.getwelcome().decode('utf8'))
    # 开始进行身份验证
    server.user(useraccount)
    server.pass_(password)
    # 使用list()返回所有邮件的编号，默认为字节类型的串
    resp, mails, octets = server.list()
    print('邮件总数： {}'.format(len(mails)))
    limits = len(mails)
    # 总的邮件数
    total_mail_numbers = len(mails)
    # 获取最新的limits封邮件, 最多获取全部的邮件，用一个列表保存
    recv_mails = []

    # ret = server.stat()
    # List_str = ""
    # for i in range(1, ret[0] + 1):
    #     mlist = str(list(server.top(i, 0))[1][0])
    #     if "SR=1" in mlist:
    #         List_str += str(i)

    limits = limits if limits <= total_mail_numbers else total_mail_numbers

    for index, item in enumerate(mails[-1:-(limits+1):-1]):
        mailinfo = MailInfo()
        index, size = decode_byte(item).split(' ')
        mailinfo.index = index
        mailinfo.size = size
        resp_status, mail_lines, mail_octets = server.retr(index)
        mailinfo.status = resp_status
        content_charset = get_rawcontent_charset(mail_lines)
        msg = parse_raw_mail_data(mail_lines, charset=content_charset)
        mailinfo.data = msg
        recv_mails.append(mailinfo)

    # 关闭与服务器的连接，释放资源
    server.close()

    # 返回获取到的limits封邮件详情
    return recv_mails


    # # 下面单纯获取最新的一封邮件
    # # 默认下标越大，邮件越新，所以total_mail_numbers代表最新的那封邮件
    # response_status, mail_message_lines, octets = server.retr(total_mail_numbers)
    # print('邮件获取状态： {}'.format(response_status))
    # print('原始邮件数据:\n{}'.format(mail_message_lines))
    # print('该封邮件所占字节大小: {}'.format(octets))
    # msg_content = b'\r\n'.join(mail_message_lines).decode('gbk')
    # # 邮件原始数据没法正常浏览，因此需要相应的进行解码操作
    # msg = Parser().parsestr(text=msg_content)
    # # print('解码后的邮件信息:\n{}'.format(msg))
    # 关闭与服务器的连接，释放资源
    # server.close()
    # return msg



def get_mail_details(selectIndex):
    # 新建一个Bean对象
    debug_level = 0
    # 获取到limits限制下的所有的邮件
    mails = get_parsed_msg(debuglevel=debug_level)
    msg = get_mail_details(mails[selectIndex].data)

    maildetails = MailDetails()

    fromstr = msg.get('From')
    maildetails.fromstr = fromstr

    # 获取收件人详情
    tostr = msg.get('To')
    maildetails.tostr = tostr

    received_time = msg.get("Received")
    maildetails.receivedtime = received_time

    # 获取头信息
    receives_header = msg.get("X-Alimail-AntiSpam").split(";")
    for i in receives_header:
        if "SR" in i:
            print(i)

    # # print(msg)
    # # 获取主题信息，也就是标题内容
    subject = msg.get('Subject')

    # print(msg)

    maildetails.subject = subject
    parts = msg.get_payload()
    if isinstance(parts, list):
        content = parts[0].as_string().split('base64')[-1]
        if is_base64_code(content):
            content_charset = parts[0].get_content_charset()
            maildetails.text_content = decode_base64(content, content_charset)
        else:
            maildetails.text_content = content
    else:
        content = decode_base64(parts, "utf-8")
        maildetails.text_content = content
    return maildetails

# 为base64编码的串进行解码操作，返回字符串信息
def decode_base64(s, charset='utf8'):
    return str(base64.decodebytes(s.encode(encoding=charset)), encoding=charset)

# 获取FROM， TO等字段的解析详情
def get_mail_info(s):
    nickname, account = s.split("@")
    return nickname, account
# 判断是否为base64位码
def is_base64_code(s):
    if s.find("_") <= 0 or s.find(" ") <= 0:
        return True
    else:
        return False

# 因为邮件中格式是由英文确定的，所以在此处查找文本的编码时可以使用utf8作为临时解码集，用于查找文本正文编码信息
def get_rawcontent_charset(rawcontent):
    for item in rawcontent:
        if decode_byte(item).find('charset='):
            charset = []
            charset = re.findall(re.compile('charset="(.*)"'), decode_byte(item))
            for item in charset:
                if item is not None:
                    return item


# 返回被email.Parser模块解码后的邮件数据信息
def parse_raw_mail_data(raw_lines, charset='utf8'):
    msg_content = b'\r\n'.join(raw_lines).decode(encoding=charset)
    return Parser().parsestr(text=msg_content)

# 将字节数据通过相应的编码转换成字符串类型的数据
def decode_byte(bstr, charset='utf8'):
    return bstr.decode(charset)

def emali_address_set(s):
    if "<" in s:
        return s.split("<")[1].split(">")[0]
    else:
        return s

def get_all_email():
    debug_level = 0
    # 获取到limits限制下的所有的邮件
    mails = get_parsed_msg(debuglevel=debug_level)
    # 进入循环操作体
    exitcode = 0
    while not exitcode:
        # 输出获取到的邮件的主题，给出相应下标，让用户进行选择
        list_result = []
        list_from = []
        list_to = []
        list_err = []
        for index, mail in enumerate(mails):
            address_from = emali_address_set(mail.data.get('from'))
            address_to = emali_address_set(mail.data.get('to'))
            print("收件地址是{}， 发件地址是：{}".format(address_to, address_from))
            if useraccount == address_from and useraccount == address_to:
                list_err.append({"mail": useraccount, "index": index})
            elif useraccount == address_from and useraccount != address_to:
                list_from.append({"mail": address_to, "index": index})
            elif useraccount == address_to and useraccount != address_from:
                list_to.append({"mail": address_from, "index": index})
        list_result.append(list_from)
        list_result.append(list_to)
        list_result.append(list_err)
        return list_result
        print(list_result)


        maildetails = get_mail_details(mails[choice].data)
        # print(maildetails.receivedtime)
        # 询问是否退出邮件查询系统，是则退出，否则继续进行下一步的查询操作
        userinput = input('ready to exit? (Y/N)')
        exitcode = 0 if (userinput=='y' or userinput=='Y') else 1



# mails = get_parsed_msg('spidersmall@163.com', 'yourpassword', 3, 1)
# data = mails[1].data
# maildetails = get_mail_details(data)
# print(maildetails.receivedtime)
# print(maildetails.subject)
# print(maildetails.from_nickname)
