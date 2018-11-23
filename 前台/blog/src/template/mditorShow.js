import React, { Component } from 'react';
import { Input,  Divider, Button, Modal } from 'antd'
import './style.css'


import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
import 'simplemde/dist/simplemde.min.css'

export default class blogEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            artical__tit: props.articalTit,
            artical__txt: props.articalTXT,
            artical__ID: props.articalID,
            artical__tip: props.articalTip,
            isBeready: 1
        }
    }
    componentDidUpdate(){
        let self = this;
        if(self.props.articalTit != "" & this.state.isBeready){
            this.setState({
                artical__tit: self.props.articalTit,
                artical__txt: self.props.articalTXT,
                artical__ID: self.props.articalID,
                artical__tip: self.props.articalTip,
                isBeready: 0
            })
        }
    }

    render() {
        return (
            <div>文章预览</div>

        )
    }
}