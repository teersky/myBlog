import React, {Component} from "react";
import { Avatar, Button, Icon } from 'antd';
import {Link,} from 'react-router-dom';
import PropTypes from "prop-types"; 
const listArr = [
    {"title": "信息展示", linkTo: "msgShow", icons: "home", child: []},
    {"title": "信息展示", linkTo: "msgShow", icons: "home", child: [
        {"title": "博文预览", linkTo: "msgShow", icons: "home", child: []},
        {"title": "博文编辑", linkTo: "msgShow", icons: "home", child: []},
        {"title": "博文修改", linkTo: "msgShow", icons: "home", child: []},
    ]},
    {"title": "用户评论", linkTo: "userComments", icons: "home", child: []},
    {"title": "权限管理", linkTo: "rightsManagement", icons: "home", child: []},
];
class leftNaviList extends Component{

    render(){

    }
}