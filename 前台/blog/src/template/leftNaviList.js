import React, {Component} from "react";
import { Icon } from 'antd';
import {Link,} from 'react-router-dom';
import PropTypes from "prop-types";
class leftNaviList extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr: [],
            listArr : [
                {"title": "信息展示", linkTo: "msgShow", icons: "bars", child: []},
                {"title": "博文处理", linkTo: "", icons: "book", child: [
                    {"title": "博文列表", linkTo: "blogList", icons: "edit", child: []},
                    {"title": "博文编辑", linkTo: "blogEditor", icons: "highligh", child: []},
                ]},
                {"title": "用户评论", linkTo: "userComments", icons: "home", child: []},
                {"title": "权限管理", linkTo: "rightsManagement", icons: "lock", child: []},
            ]
        }
    }
    listClick(event, index){
        let arr = [];
        let num = index.toString();
       for(var i = 1; i <= num.length; i++){
           arr.push(num.slice(0,i))
       }
        this.setState({
            arr: arr
        })
    }

    componentDidUpdate (){
        let hei = this.ScrollBox.offsetHeight;
        this.props.callBackDate(hei);
    }
    render(){
        const  apiData = this.state.listArr;
        return (
            
            <ul ref={dom => {this.ScrollBox = dom}} style={this.props.data}>
                {
                    apiData.map((list, val) => {
                        if(list.child === undefined || list.child.length === 0){
                            return (
                                <li  className={Number(this.state.arr[0])  === val ? "li_style open": "li_style"} key = {val}>
                                    <Link to={ "/BackStage/" + list.linkTo.split(" ")[0] } className="linkTo" onDragStart={ (event) => {event.preventDefault()}}><p onClick={(event) => {this.listClick(event, val)}}><Icon type={list.icons} className="left_tit_nave_icon"/>{ list.title }</p></Link>
                                    <ul>
        
                                    </ul>
                                </li>
                            )
                        }else{
                            return (
                                <li  className={Number(this.state.arr[0])  === val ? "li_style open": "li_style"} key = {val}>
                                    {
                                        list.linkTo.split(" ")[0] == ""
                                        ?
                                        <a href="javascript:;" className="linkTo" onDragStart={(event) => {event.preventDefault()}}><p onClick={(event) => {this.listClick(event, val)}}><Icon type={list.icons} className="left_tit_nave_icon"/>{ list.title }</p></a>
                                        :
                                        <Link to={ "/BackStage/" + list.linkTo.split(" ")[0] } className="linkTo" onDragStart={(event) => {event.preventDefault()}}><p onClick={(event) => {this.listClick(event, val)}}><Icon type={list.icons} className="left_tit_nave_icon"/>{ list.title }</p></Link>
                                    }
                                    
                                    <ul>
                                        { 
                                            list.child.map((items, index) => {
                                                return (
                                                    <li className={Number(this.state.arr[1]) === Number(val+""+index) ? "li_style open": "li_style"} key = {Number(val+""+index)}>
                                                        <Link to={ "/BackStage/" + items.linkTo.split(" ")[0] } className="linkTo" onDragStart={(event) => {event.preventDefault()}}><p onClick={(event) => {this.listClick(event, Number(val+""+index))}}>{ items.title }</p></Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            )
                        }
                        
                    }) 
                }
            </ul>
        )
    }
}
export default leftNaviList;