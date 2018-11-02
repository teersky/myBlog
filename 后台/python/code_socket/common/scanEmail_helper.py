import threading
from common import mail_helper

def fun_timer():
    mail_helper.get_mail()
    global timer
    timer = threading.Timer(30, fun_timer)
    timer.start()

# timer = threading.Timer(1, fun_timer)
# timer.start()
