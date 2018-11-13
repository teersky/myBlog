import React, { Component } from 'react';
import { Input,  Divider, Button  } from 'antd'
import Mditor from 'mditor/js/mditor.min.js'
import './style.css'
import 'mditor/css/mditor.min.css'

export default class blogEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectTips: ""
        }
    }
    SelectTips__artical(items){
        console.log(items);
        this.setState({
            selectTips: items
        });
    }
    setSelectTips(value){
        console.log(value);
        this.setState({
            selectTips: value
        });
    }
    componentDidMount(){
        var ele = this.refs.md_editor;
        var mditor =  Mditor.fromTextarea(ele);
      }
    render() {
        const artical__tips = this.props.artical__tips;
        return (
            <div className="EditorBox">
                <Divider>头部</Divider>
                <p className="Editor__Header">
                    <span>标题：</span>
                    <Input placeholder="请输入文章标题" />
                </p>
                <section className="Editor__Header">
                    <div class="Editor-Header__type">
                        <span>分类：</span>
                        <div class="Editor-Header__typeInp">
                            <Input placeholder="请输入文章分类" id="setSelectTipsInput" onChange ={(e) => {this.setSelectTips(e.target.value)}} value={ this.state.selectTips }/>
                            <p className="Editor__Tips">
                                {
                                    artical__tips.map((items) => {
                                        return <Button size="small" onClick = {() => { this.SelectTips__artical(items) }}>{items}</Button>
                                    })
                                }
                            </p>
                        </div>
                    </div>
                </section>
                <Divider>正文</Divider>
                <div>
                    <textarea id="md_editor" ref="md_editor"></textarea>
                </div>
           </div>

        )
    }
}