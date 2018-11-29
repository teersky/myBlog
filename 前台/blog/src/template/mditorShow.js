import React, { Component } from 'react';
import Base64 from "../modules/baseDecode"


import Marked from "marked"
import "./mddown.css"

export default class blogEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        let articalDetail = Marked(Base64.decode(this.props.articalTXT));
        let artical__tit = this.props.articalTit;
        let artical__txt = this.props.articalTXT;
        let artical__ID = this.props.articalID;
        let artical__tip = this.props.articalTip;

        return (
            <div dangerouslySetInnerHTML={{__html: articalDetail}} className="markdown_white"></div>
        )
    }
}
