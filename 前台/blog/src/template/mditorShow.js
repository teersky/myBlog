import React, { Component } from 'react';
import { Input,  Divider, Button, Modal } from 'antd'


import Marked from "marked"
import "./mddown.css"

export default class blogEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        let articalDetail = Marked(this.props.articalTXT);
        let artical__tit = this.props.articalTit;
        let artical__txt = this.props.articalTXT;
        let artical__ID = this.props.articalID;
        let artical__tip = this.props.articalTip;

        return (
            <div dangerouslySetInnerHTML={{__html: articalDetail}} className="markdown_white"></div>
        )
    }
}
