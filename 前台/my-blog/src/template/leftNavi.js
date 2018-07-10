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
import ChildPage from "./child"

let style = {
    div_style: {
        width: "120px",
        background: "rgb(66,66,66)",
        height: "100%",
        paddingTop: "10px"
    },
    li_style: {
        color: "#ffffff",
        padding: "10px 0",
        textAlign: "center",
        borderBottom: "1px solid #cccccc"
    },
    scrollBox: {
        height: '100%',
        overflow: "hidden",
        position: "relative"
    },
    oUl: {},
}
class leftNavi extends Component {
    constructor(props) {
        super(props); //第一步，这是必须的
        //不能调用state
        this.state = { //第二步，赋初始值
            oUl: {
                width: '100%',
                overflowX: "hidden",
                padding: 0,
                margin: 0,
                userSelect: 'none',
                position: 'absolute',
                left: 0,
                top: 0
            },
            isListShow: false,
            start_T: 0,
            run_T: 0,
            end_T: 0,
            canDrag: false,
            stauts: props,
            endClickPoint: 0
        };
    }
    mouseDownEv(event) {
        console.log(event.clientY );
        this.setState({
            start_T: event.clientY,
            canDrag: true
        });
        this.props.handleEv("hello");
    }
    mouseMoveEv(event) {
        
        if (this.state.canDrag == true) {
            console.log(this.state.endClickPoint);
            this.setState({
                run_T: event.clientY,
                oUl: {
                    width: '100%',
                    overflowX: "hidden",
                    padding: 0,
                    margin: 0,
                    userSelect: 'none',
                    position: 'absolute',
                    left: 0,
                    top: -(event.clientY - this.state.start_T - this.state.endClickPoint)
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
        return (
            <div style={style.div_style}>
                <div className="scrollBox" style={ style.scrollBox } onMouseDown={(event) => { this.mouseDownEv(event) }} onMouseMove={(event) => { this.mouseMoveEv(event) }} onMouseUp={(event) => { this.mouseUpEv(event) }} onMouseLeave={(event) => { this.mouseLeaveEv(event) }}>
                    <ul style={this.state.oUl} >
                        <li style={style.li_style}>第一页</li>
                        <li style={style.li_style}>第二页</li>
                        <li style={style.li_style}>第三页</li>
                        <li style={style.li_style}>第四页</li>
                        <li style={style.li_style}>第一页</li>
                        <li style={style.li_style}>第二页</li>
                        <li style={style.li_style}>第三页</li>
                        <li style={style.li_style}><ChildPage /></li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default leftNavi;