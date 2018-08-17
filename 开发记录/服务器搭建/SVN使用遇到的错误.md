# 问题1： UID不匹配
### 报错代码：
```
svn: E170009: Repository UUID '0a745c3e-f6d9-49b6-a6ab-8682261fe691' doesn't match expected UUID '61350f3c-7721-4451-be90-ae011a55fb44'
``` 
解决方案：
1、 首先先查看版本库的UUID，我的版本库名称为： test
`
 svnlook uuid /data/svn/test/
`
查询到我此刻的版本库的UUID是： 0a745c3e-f6d9-49b6-a6ab-8682261fe691

2. 重新定向新的版本库的UUID， 命令为：
```
svnadmin setuuid /data/svn/test 61350f3c-7721-4451-be90-ae011a55fb44
```
此时再查询就能发现版本库的UUID已经更新了： 61350f3c-7721-4451-be90-ae011a55fb44
