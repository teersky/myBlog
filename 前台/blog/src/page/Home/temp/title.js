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

import "./temp.css";

class Tit extends Component {
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
                <h3 className="page__tName">{/* 我的博客信息展示 */}</h3>
            </div>
        )
    }
}


export default Tit;