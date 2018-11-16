import React, { Component } from 'react';
import { Input,  Divider, Button, Modal } from 'antd'
import './style.css'


import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
import 'simplemde/dist/simplemde.min.css'

import APIData from "../modules/get-api"

export default class blogEditor extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            simplemde: "",
            artical__tit: props.articalTit,
            artical__txt: props.articalTXT,
            artical__ID: props.articalID,
            artical__tip: props.articalTip,
            artical__tipList: props.artical__tipLists
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
        let articalID = this.state.artical__ID == ""? new Date().getTime() : this.state.artical__ID;
        var artical = page.value();
        this.setState({
            artical__txt: artical
        });
        let articalTit = this.state.artical__tit;
        let articalTxt = artical;
        let articalTip = this.state.artical__tip;
        if(articalTit == ""){
            this.error("文章名称不能为空");
        }else if(articalTxt == ""){
            this.error("文章内容不能为空");
        }else if(articalTip == ""){
            this.error("文章分类不能为空");
        }else{
            var json = {};
            json.id = articalID;
            json.tit = articalTit;
            json.tip = articalTip;
            json.txt = articalTxt;
            json.new =  this.state.artical__ID == "" ? "n" : "o";
            APIData.post("/apiPost/uploadArtical/", json).then((result) => {
                console.log(result);
            });
        }
        console.log(articalID, articalTit, articalTxt, articalTip, artical)
    }

    error(msg_tit) {
        Modal.error({
          title: msg_tit
        });
    }

    channelPage(){
        let self  =this;
        Modal.confirm({
            title: '您确定要清除本页面上所有的东西吗?',
            content: '点击确定所有数据将不在保留，您确定要继续吗？',
            onOk() {
                self.state.simplemde.value("")
                self.setState({
                artical__tit: '',
                artical__txt: "",
                artical__tip: "",
              })
            },
            onCancel() {},
        });
    }

    render() {
        return (
            <div className="EditorBox">
                <Divider>头部</Divider>
                <p className="Editor__Header">
                    <span>标题：</span>
                    <Input placeholder="请输入文章标题" onInput = { (e) => { this.inputTitEv(e.target.value)}}  value={ this.state.artical__tit }/>
                </p>
                <section className="Editor__Header">
                    <div className="Editor-Header__type">
                        <span>分类：</span>
                        <div className="Editor-Header__typeInp">
                            <Input placeholder="请输入文章分类" id="setSelectTipsInput" onChange ={(e) => {this.setSelectTips(e.target.value)}} value={ this.state.artical__tip }/>
                            <p className="Editor__Tips">
                                {
                                    this.state.artical__tipList.map((items, key) => {
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
                <Button onClick={ () => {this.channelPage() }}  className="channelBtn">清空</Button>
           </div>

        )
    }
}