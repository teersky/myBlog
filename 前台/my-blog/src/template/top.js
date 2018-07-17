import React, { Component }from 'react';
import { Icon } from 'antd';
import {
    Link,
} from 'react-router-dom';
import './style.css';

let user = "admin";

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isListShow: false
        };
    }
    
    
    list = () => {       
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
                    <p className="openList" onClick={() =>{this.list()}}>
                        <Icon type="bars" className="tit_nave_icon" style={{ fontSize: 32, color: '#fff' }}/>
                    </p>
                    <ul className={ !this.state.isListShow?"tit_navi hide":"tit_navi" }>
                        <li className="tit_navi_list">
                            <Icon type="user" className="tit_nave_icon"/>
                            <span className="tit_navi_txt">用户:{user}</span>
                        </li>
                        <li className="tit_navi_list">
                            <Link to="/">
                                <Icon type="home" className="tit_nave_icon"/>
                                <span className="tit_navi_txt">系统首页</span>
                            </Link>
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