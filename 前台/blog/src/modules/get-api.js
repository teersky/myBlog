//一个 Promise 就是一个代表了异步操作最终完成或者失败的对象
import axios from 'axios';
import consts from "../config/const"

axios.defaults.withCredentials=true;

export default class HttpUtils{
    static get=(url)=>{
        return new  Promise(((resolve, reject) => {//resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）
            fetch(consts.url + url,{
                method:'GET',
                credentials: 'include',
            }).then(res => res.json())//把数据解析成json格式,然后取出
                .then((result) => {
                     resolve(result);//表示完成
                })
                .catch(error=>{
                     reject(error);//表示失败
                })
            })
        )
    };
    static get_noCors=(url)=>{
        return new  Promise(((resolve, reject) => {//resolve 和 reject 函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）
            fetch(consts.url + url,{
                method:'GET',
                credentials: 'include',
                mode: "no-cors",
            }).then(res => res.json())//把数据解析成json格式,然后取出
                .then((result) => {
                     resolve(result);//表示完成
                })
                .catch(error=>{
                     reject(error);//表示失败
                })
            })
        )
    };
    static post=(url,data)=>{
        let date_Str = "";
        for(let i in data){
            date_Str += i+ "=" + data[i] + "&"
        }
        console.log(consts.url, url);
        return new Promise(((resolve, reject) => {
            fetch(consts.url + url,{
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:date_Str.substring(0, date_Str.length - 1),//(把你想提交得数据序列化为json字符串类型，然后提交)body中的数据就是我们需要向服务器提交的数据,比如用户名,密码等
            }).then(res => res.json())
            .then((result) => {
                    resolve(result);
            }).catch(error=> {
                    reject(error);
                })
            })
        )
    };
    static axiso_Post = (url, data, fns) => {
        let date_Str = "";
        for(let i in data){
            date_Str += i+ "=" + data[i] + "&"
        }
        axios({
            method:"POST",
            url: consts.url + url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data:date_Str,
            changeOrigin:true,
            success(res){
                console.log(res);
                fns(res);
            }
        });
    }
    static post_noAddress=(url,data)=>{
        let date_Str = "";
        for(let i in data){
            date_Str += i+ "=" + data[i] + "&"
        }
        return new Promise(((resolve, reject) => {
            fetch(consts.url + url,{
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:date_Str.substring(0, date_Str.length - 1),//(把你想提交得数据序列化为json字符串类型，然后提交)body中的数据就是我们需要向服务器提交的数据,比如用户名,密码等
            }).then(res => res.json())
            .then((result) => {
                    resolve(result);
            }).catch(error=> {
                    reject(error);
                })
            })
        )
    };
}//数据转换成字符串 JSON.stringify(params)      //将数据JSON化 JSON.parse(responseJSON)