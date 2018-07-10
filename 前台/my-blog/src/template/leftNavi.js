import React, {
    Component
} from 'react';
import {
    Avatar,
    Button
} from 'antd';
import {
    Link,
} from 'react-router-dom';
import PropTypes from "prop-types";
import ChildPage from "./child"
import "./style.css"

let style = {
    oUl: {}
}
class leftNavi extends Component {
    constructor(props) {
        super(props); //第一步，这是必须的
        //不能调用state
        this.state = { //第二步，赋初始值
            oUl: {
                top: 0
            },
            isListShow: false,
            start_T: 0,
            run_T: 0,
            end_T: 0,
            canDrag: false,
            props: props,
            endClickPoint: 0,
            pageMulse: 0,
        };
    }
    static contextTypes = {
        mouseMoveLen:PropTypes.string,
        callback:PropTypes.func,
    }
    mouseDownEv(event) {
        console.log("down")
        let ScrollBox_all = this.ScrollBox_all.offsetHeight;
        let ScrollBox = this.ScrollBox.offsetHeight;
        if(ScrollBox > ScrollBox_all){
            this.setState({
                start_T: event.clientY,
                canDrag: true,
                pageMulse: ScrollBox - ScrollBox_all
            });
        }
        this.props.handleEv("hello");
    }
    mouseMoveEv(event) {
       
        if (this.state.canDrag == true) {
            let top_num = -(-event.clientY + this.state.start_T - this.state.endClickPoint);
            if( top_num > 0){
                top_num = 0;
            }
            if(top_num < -this.state.pageMulse){
                top_num =  -this.state.pageMulse
            }
            this.setState({
                run_T: event.clientY,
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
    render() {
        const mouseMoveLen = { color:this.context.mouseMoveLen }
        console.log(mouseMoveLen);
        return (
            <div className="div_style">
                <div className="scrollBox"  onMouseDown={(event) => { this.mouseDownEv(event) }} onMouseMove={(event) => { this.mouseMoveEv(event) }} onMouseUp={(event) => { this.mouseUpEv(event) }} onMouseLeave={(event) => { this.mouseLeaveEv(event) }} ref={dom => {this.ScrollBox_all = dom}}>
                    <ul className="oUl" ref={dom => {this.ScrollBox = dom}} style={ this.state.oUl }>
                        <li className="li_style">第一页</li>
                        <li className="li_style">第二页</li>
                        <li className="li_style">第三页</li>
                        <li className="li_style">第四页</li>
                        <li className="li_style">第一页</li>
                        <li className="li_style">第二页</li>
                        <li className="li_style">第三页</li>
                        <li className="li_style">第一页</li>
                        <li className="li_style">第二页</li>
                        <li className="li_style">第三页</li>
                        <li className="li_style">第四页</li>
                        <li className="li_style">第一页</li>
                        <li className="li_style">第二页</li>
                        <li className="li_style">第三页</li>
                        <li className="li_style">第一页</li>
                        <li className="li_style">第二页</li>
                        <li className="li_style">第三页</li>
                        <li className="li_style">第四页</li>
                        <li className="li_style">第一页</li>
                        <li className="li_style">第二页</li>
                        <li className="li_style">第n页</li>
                        {/*<Route path="/page3" component={Page03}*/}
                    </ul>
                </div>
            </div>
        )
    }
}


export default leftNavi;