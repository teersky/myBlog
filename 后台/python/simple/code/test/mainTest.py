from bottle import *


# decorator
def allow_cross_domain(fn):
    def _enable_cors(*args, **kwargs):
        # set cross headers
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,OPTIONS'
        allow_headers = 'Referer, Accept, Origin, User-Agent'
        response.headers['Access-Control-Allow-Headers'] = allow_headers
        if bottle.request.method != 'OPTIONS':
            # actual request; reply with the actual response
            return fn(*args, **kwargs)

    return _enable_cors


@route('/api/login', methods=['GET', 'POST'])
@allow_cross_domain  # 在此处加上定义的函数
def hello():
    print("Helli")
    return 'hello world. tjp'


run(host='0.0.0.0', port=9000)