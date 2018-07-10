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
        console.log(this.contextTypes.color);
    }
    render() {
        return (
            <a href="javascript:;" onClick={this.clickEv}>点我</a>
        )
    }
}


export default leftNavi;