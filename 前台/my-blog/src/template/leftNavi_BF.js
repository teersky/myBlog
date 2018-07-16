import React, {
    Component
} from 'react';
import {
    Avatar,
    Button,
    Icon
} from 'antd';
import {
    Link,
} from 'react-router-dom';
import PropTypes from "prop-types";

import "./style.css"
import LeftNaviList from './leftNaviList';

let style = {
    oUl: {}
}
let old_Wid_W = -120;
class leftNavi extends Component {
    constructor(props) {
        super(props); //第一步，这是必须的
        //不能调用state
        this.state = { //第二步，赋初始值
            oUl: {
                top: 0,
                left: 0
            },
            isListShow: false,
            start_T: 0,
            run_T: 0,
            end_T: 0,
            canDrag: false,
            props: props,
            endClickPoint: 0,
            pageMulse: 0,
            oldLocation: -120,
            openIndex: 0
        };
    }
    static contextTypes = {
        isMouseUp: PropTypes.bool,
        windowWidth:PropTypes.string,
        mouseMoveLen:PropTypes.string,
        callback:PropTypes.func,
    }
    mouseDownEv(event) {
        let clientY = null;
        if(event.touches != undefined){
             clientY = event.touches[0].clientY;
          }else{
            clientY = event.clientY;
          }
     //   let clientY = event.clientY || event.touches[0].clientY;
        let ScrollBox_all = this.ScrollBox_all.offsetHeight;
        let ScrollBox = this.ScrollBox.offsetHeight;
        if(ScrollBox > ScrollBox_all){
            this.setState({
                start_T: clientY,
                canDrag: true,
                pageMulse: ScrollBox - ScrollBox_all
            });
        }
        this.props.handleEv("hello");
    }
    mouseMoveEv(event) {
        let clientY = null;
        if(event.touches != undefined){
            clientY = event.touches[0].clientY;
          }else{
            clientY = event.clientY;
          }
       // let clientY = event.clientY || event.touches[0].clientY;
        if (this.state.canDrag == true) {
            let top_num = -(-clientY + this.state.start_T - this.state.endClickPoint);
            if( top_num > 0){
                top_num = 0;
            }
            if(top_num < -this.state.pageMulse){
                top_num =  -this.state.pageMulse
            }
            this.setState({
                run_T: clientY,
                oUl: {
                    top: top_num
                }
            });
        }
    }
    mouseUpEv() {
        this.setState({
            canDrag: false,
            endClickPoint: this.state.oUl.top
        });
    }
    mouseLeaveEv(){
        this.setState({
            canDrag: false,
            endClickPoint: this.state.oUl.top
        });
    }
    handleWheel(event) {
        console.log(event)
    }
    listClick(event, index){
        let arr = [];
        let num = index.toString();
       for(var i = 1; i <= num.length; i++){
           arr.push(num.slice(0,i))
       }
        this.setState({
            openIndex: arr
        })
    }
    render() {
        const mouseMoveLen = Number(this.context.mouseMoveLen);
        const  windowWidth = Number(this.context.windowWidth);
        const  ismouseup = this.context.isMouseUp;
        let wid_W = null;
        let w = null;
        
        if(windowWidth < 530){
            if(ismouseup){
                if(old_Wid_W == -120){
                    if(mouseMoveLen > 60){
                        wid_W = -5 + "px";
                        old_Wid_W = -5;
                    }else{
                        wid_W = -125 + "px";
                        old_Wid_W = -125
                    }
                }else{
                    if(mouseMoveLen < -60){
                        wid_W = -125 + "px";
                        old_Wid_W = -125;
                    }else{
                        wid_W = -5 + "px";
                        old_Wid_W = -5
                    } 
                }
            }else{
                if(old_Wid_W == -5){
                    wid_W = (-5 + mouseMoveLen) < -120 ? -120 : (-5 + mouseMoveLen) >= 0?0: (0 + mouseMoveLen) + "px";
                }else{
                    wid_W = (-120 + mouseMoveLen) < -120 ? -120 : (-120 + mouseMoveLen) >= 0?0: (-120 + mouseMoveLen) + "px";
                }
            }
        }
        var arr = this.state.openIndex;
        console.log(arr);

        return (
            <div className="div_style" style={{left:  wid_W}} text={"text".split("")[0]}>
                <div className="scrollBox"  
                    onMouseDown={(event) => { this.mouseDownEv(event) }} onMouseMove={(event) => { this.mouseMoveEv(event) }} 
                    onMouseUp={(event) => { this.mouseUpEv(event) }} onMouseLeave={(event) => { this.mouseLeaveEv(event) }} 
                    onTouchStart={(event) => { this.mouseDownEv(event) }} onTouchMove={(event) => { this.mouseMoveEv(event) }} 
                    onTouchEnd={(event) => { this.mouseUpEv(event) }} onMouseLeave={(event) => { this.mouseLeaveEv(event) }} 
                    onWheel={this.handleWheel} ref={dom => {this.ScrollBox_all = dom}}>

                    <ul className="oUl" ref={dom => {this.ScrollBox = dom}} style={this.state.oUl}>
                        <li className={ arr[0] == 0 ? "li_style open": "li_style"} >
                            <Link to="msgShow" className="linkTo"> <p onClick={(event) => {this.listClick(event, 0)}}><Icon type="home" className="left_tit_nave_icon"/>信息展示</p></Link>
                        </li>
                        <li  className={arr[0]== 1 ? "li_style open": "li_style"} >
                            <Link to="BlogHandle" className="linkTo"><p onClick={(event) => {this.listClick(event, 1)}}><Icon type="home" className="left_tit_nave_icon" />博文处理</p></Link>
                            <ul>
                                <li className={arr[1] == 11 ? "li_style open": "li_style"}>
                                    <Link to="blogShow" className="linkTo"><p onClick={(event) => {this.listClick(event, 11)}}>博文预览</p></Link>
                                </li>
                                <li className={this.state.openIndex[1] == 12 ? "li_style open": "li_style"}>
                                    <Link to="blogEditor" className="linkTo"><p onClick={(event) => {this.listClick(event, 12)}}>博文编辑</p></Link>
                                </li>
                                <li className={this.state.openIndex[1] == 13 ? "li_style open": "li_style"}>
                                    <Link to="blogModify" className="linkTo"><p onClick={(event) => {this.listClick(event, 13)}}>博文修改</p></Link>
                                </li>
                            </ul>
                        </li>
                        <li  className={arr[0]  == 2 ? "li_style open": "li_style"}>
                            <Link to="userComments" className="linkTo"><p onClick={(event) => {this.listClick(event, 2)}}> <Icon type="home" className="left_tit_nave_icon"/>用户评论</p></Link>
                            <ul>
                              
                            </ul>
                        </li>
                        <li  className={arr[0]  == 3 ? "li_style open": "li_style"}>
                            <Link to="rightsManagement" className="linkTo"><p onClick={(event) => {this.listClick(event, 3)}}><Icon type="home" className="left_tit_nave_icon"/>权限管理</p></Link>
                            <ul>

                            </ul>
                        </li>
                    
                        <LeftNaviList />
                    </ul>  
                </div>
            </div>
        )
    }
}


export default leftNavi