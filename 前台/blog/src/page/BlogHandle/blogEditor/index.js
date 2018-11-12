import React, {Component} from 'react';
import WangEditor from '../../../template/wangEditor'

export default class blogEditor extends Component  {
    constructor(props){
        super(props);
        this.state = {
            artical__tips: ["Python", "Js", "HTML5", "JAVA", "随笔", "总结"]
        };
    }
    render() {
        return (
            <WangEditor artical__tips = { this.state.artical__tips } ></WangEditor>
        )
    }
}