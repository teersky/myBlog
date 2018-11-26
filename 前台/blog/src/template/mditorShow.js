import React, { Component } from 'react';
import { Input,  Divider, Button, Modal } from 'antd'
import './style.css'


import Marked from "marked"
import PopupMask from "./PopupMask.jsx"

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
            <section>
                <div>文章预览</div>
                <PopupMask><div>真香警告</div></PopupMask>
            </section>
        )
    }
}
