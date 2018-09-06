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

class leftNavi extends Component {
    constructor(props) {
        super(props); //第一步，这是必须的
        //不能调用state
    }
    static contextTypes = {
        color:PropTypes.string,
        callback:PropTypes.func,
    }
    clickEv(){
        console.log(this);
    }
    render() {
        const cb = (msg) => {
            return () => {
                this.context.callback(msg);
            }
        }
        return (
            <div>
            <a href="javascript:;" onClick = { cb("我胡汉三又回来了！") }>点我</a>
            <a href="javascript:;" onClick = { () => {this.clickEv()} }>点我2</a>  </div>
        )
    }
}


export default leftNavi;