import React, {Component} from 'react';
import MDitor from '../../../template/wangEditor'

const style={
    padding: '10px'
};
export default class blogEditor extends Component  {
    constructor(props){
        super(props);
        this.state = {
            artical__tipLists: ["Python", "Js", "HTML5", "JAVA", "随笔", "总结"],
            articalID: "",
            articalTit: "",
            articalTXT: "",
            articalTips: ""
        };
    }
    render() {
        return (
            <div style={style} >
                <MDitor 
                    artical__tipLists = { this.state.artical__tipLists } 
                    articalID = { this.state.articalID }
                    articalTit = { this.state.articalTit }
                    articalTXT = { this.state.articalTXT }
                    articalTip = { this.state.articalTips } 
                    className="EditorBox"></MDitor>
            </div>
        )
    }
}