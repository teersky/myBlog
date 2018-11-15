import React, { Component } from 'react';
import { Input,  Divider, Button  } from 'antd'
/* import Mditor from 'mditor' */
import './style.css'
/* import Mditor from 'mditor'
import 'mditor/dist/css/mditor.min.css' */

import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
import 'simplemde/dist/simplemde.min.css'

export default class blogEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            simplemde: "",
            artical__tit: this.props.articalTit,
            artical__txt: this.props.articalTXT,
            artical__ID: this.props.articalID,
            artical__tip: this.props.articalTip
        }
    }
    SelectTips__artical(items){
        this.setState({
            artical__tip: items
        });
    }
    setSelectTips(value){
        this.setState({
            artical__tip: value
        });
    }
    componentDidMount(){
        this.mditor();
        console.log(this.state.artical__txt);
    }
    mditor(){
        let smde = new SimpleMDE({
            element: document.getElementById('md_editor').childElementCount,  
            autofocus: true,
            autosave: true,
            previewRender: function(plainText) {
                return marked(plainText,{
                        renderer: new marked.Renderer(),
                        gfm: true,
                        pedantic: false,
                        sanitize: false,
                        tables: true,
                        breaks: true,
                        smartLists: true,
                        smartypants: true,
                        highlight: function (code) {
                                return highlight.highlightAuto(code).value;
                        }
                });
            },
        });
        this.setState({
            simplemde: smde
        });
        smde.value(this.state.artical__txt);
    }
    inputTitEv(value){
        this.setState({
            artical__tit: value
        });
    }
    submitPage(){
        var page = this.state.simplemde;
        var artical = page.value();
        console.log(this.state.artical__tit)

    }
    render() {
        const artical__tips = this.props.artical__tips;
        return (
            <div className="EditorBox">
                <Divider>头部</Divider>
                <p className="Editor__Header">
                    <span>标题：</span>
                    <Input placeholder="请输入文章标题" onInput = { (e) => { this.inputTitEv(e.target.value)}}  value={ this.state.artical__tip }/>
                </p>
                <section className="Editor__Header">
                    <div className="Editor-Header__type">
                        <span>分类：</span>
                        <div className="Editor-Header__typeInp">
                            <Input placeholder="请输入文章分类" id="setSelectTipsInput" onChange ={(e) => {this.setSelectTips(e.target.value)}} value={ this.state.selectTips }/>
                            <p className="Editor__Tips">
                                {
                                    artical__tips.map((items, key) => {
                                        return <Button size="small" onClick = {() => { this.SelectTips__artical(items) }}>{items}</Button>
                                    })
                                }
                            </p>
                        </div>
                    </div>
                </section>
                <Divider>正文</Divider>
                <div className="Editor-Body-detail">
                    <textarea id="md_editor" ref="md_editor"></textarea>
                </div>
                <Button onClick={ () => {this.submitPage() }}>提交</Button>
           </div>

        )
    }
}