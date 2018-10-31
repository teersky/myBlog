import imaplib
import re
 
def LoginMail(hostname, user, password):
    r = imaplib.IMAP4_SSL(hostname)
    r.login(user, password)
    x, y = r.status('INBOX', '(MESSAGES UNSEEN)')
    
    print(y)
 
 
if __name__ == '__main__':
    LoginMail('imap.aliyun.com', 'teersky@aliyun.com', '19950913zhd') 
    
