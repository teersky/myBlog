import React, { Component }from 'react';
import { Icon } from 'antd';
import { Link, } from 'react-router-dom';
import './style.css';

let user = "admin";
var block_index = 0;
let style = {
    
}
class NavBar extends Component{
    constructor(props){
        super(props);//第一步，这是必须的
        //不能调用state
        this.state = {//第二步，赋初始值
        
            isListShow: false
        };
    }
    
    
    list = () => {
        console.log("hahah");
        block_index++;         
        this.setState({
            isListShow: !this.state.isListShow,
        })
    }
    reloadEv(){
        console.log("reloadEv");
        window.location.reload();
    }
    render(){
        return (
            <div className="top_Navi">
                <span className="page_tit">个人博客后台系统</span>
                <div className="navi_box">
                    <a href="javascript:;" className="openList" onClick={() =>{this.list()}}>
                        <Icon type="bars" className="tit_nave_icon" style={{ fontSize: 32, color: '#fff' }}/>
                    </a>
                    <ul className={ !this.state.isListShow?"tit_navi hide":"tit_navi" }>
                        <li className="tit_navi_list">
                            <Icon type="user" className="tit_nave_icon"/>
                            <span className="tit_navi_txt">用户:{user}</span>
                        </li>
                        <li className="tit_navi_list">
                            <Icon type="home" className="tit_nave_icon"/>
                            <span className="tit_navi_txt">系统首页</span>
                        </li>
                        <li className="tit_navi_list" onClick={() => {this.reloadEv()}}>
                            <Icon type="sync" className="tit_nave_icon"/>
                            <span className="tit_navi_txt">刷新</span>
                        </li>
                        <li className="tit_navi_list">
                            <Icon type="mail" className="tit_nave_icon"/>
                            <span className="tit_navi_txt">我的邮件</span>
                        </li>
                        <li className="tit_navi_list">
                            <Icon type="setting" className="tit_nave_icon"/>
                            <span className="tit_navi_txt">个人设置</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;