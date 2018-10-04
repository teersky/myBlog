import React, {
        Component
    } from 'react';
/* import Constant from "../../Constant/Constant" */
import APIDate from "../../modules/get-api"
import "./login.css"
    
    class Login extends Component {
        constructor(props) {
            super(props);
            this.state = {
                imgUrl:  "http://192.168.1.250:81/api/verify/?" + 100 * Math.random(),
                verifyValue: ""
            };
        }
        
        submitData(){
            //sessionStorage.setItem('user','admin'); 
            //sessionStorage.setItem('key','68E109F0F40CA72A15E05CC22786F8E6'); 
            //window.location.reload();
        }
        get_verify() {
            this.setState({
                imgUrl: "http://192.168.1.250:81/api/verify/?" + 100 * Math.random()
            })
         }
        submitValue(){
            let loginUserList = {};
            loginUserList.username = this.refs.username.value;
            loginUserList.password = this.refs.password.value;
            loginUserList.verify = this.refs.verify.value;
            loginUserList._method = 'put';
            APIDate.post("http://192.168.1.250:81/apiPost/login/",loginUserList)
            .then( (result) => {
                sessionStorage.setItem("key", document.cookie.split("=")[1]);
                window.location.reload();
            });  
        }
        resetValue(){
            console.log("reset");
        }
        render(){
            return (
                <section id="loginForm">
                    <label><input type="text" placeholder="姓名" id="username" ref="username" /></label>
                    <label><input type="password" placeholder="密码" id="password"ref="password" /></label>
                    <p className="YAMBox">
                        <label>
                            <input type="text" placeholder="验证码" id="YZM" ref="verify" defaultValue={this.state.verifyValue} />
                        </label>
                        <img className="verify_img" id="verifycode" src={this.state.imgUrl} /> 
                        <a href="javascript:;" onClick={() => {this.get_verify()}}>看不清，换一张</a>
                    </p>
                    <p className="button_box">
                        <button onClick={ () => {this.submitValue()}}>提交</button>  
                        <button onClick={ () => {this.resetValue()}}>重置</button>
                    </p>
                </section>
            );
        }
    }

  export default Login;