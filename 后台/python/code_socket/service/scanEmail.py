import threading
import imaplib
from config import const
from common import websocket_helper, mail_helper

imap = const.IMAP
user = const.EMAIL_USER
passwd = const.EMAIL_PWD

def scan_init():
    timer__run()

def timer__run():
    result = sancEmail()
    result = str(result[0], encoding = "utf8").split("(")[1].split(")")[0].split(" ")
    print(str(result[7]))
    websocket_helper.sendMessage(str(result[7]))
    global timer
    timer = threading.Timer(30, timer__run)
    timer.start()

def sancEmail():
    return LoginMail(imap, user, passwd)

def LoginMail(hostname, user, password):
    r = imaplib.IMAP4_SSL(hostname)
    r.login(user, password)
    x, y = r.status('INBOX', '(MESSAGES UNSEEN)')
    return y

# if __name__ == '__main__':
#     scan_init()