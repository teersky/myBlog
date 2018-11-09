import React, {Component} from 'react';
import { Icon } from 'antd';
import "./index.css";
import ChinaMap from "./temp/ResMapReviewer"
import Spread from "./temp/spread"

let articalData = [{
    "title": "Node.js用法和注意事项",
    "value": "320"
}, {
    "title": "nginx的配置1",
    "value": "210" 
}, {
    "title": "python的用法2",
    "value": "200" 
}, {
    "title": "python的用法3",
    "value": "182" 
}, {
    "title": "python的用法4",
    "value": "160" 
}, {
    "title": "python的用法5",
    "value": "122" 
}, {
    "title": "python的用法6",
    "value": "120" 
}, {
    "title": "python的用法7",
    "value": "118" 
}]

/* , {
    "title": "python的用法8",
    "value": "113" 
}, {
    "title": "python的用法9",
    "value": "102" 
} */

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articalData: articalData
        };
    }
    render() {
        return (
            <div className="defaultBox">
                <ul className="title_List">
                    <li>
                        <p className="title-icons__box LKFW">
                            <Icon type="coffee" theme="twoTone"  className="icons"/>
                            <span>访客</span>    
                        </p>    
                        <i className="cutLine"></i>   
                        <p className="title-data__box">
                            <span className="yestarday">20 昨天</span>
                            <span className="allDay">1024 总数</span>
                        </p>
                    </li>
                    <li>
                        <p className="title-icons__box BWCK">
                            <Icon type="file" theme="twoTone"  className="icons"/>
                            <span>文章阅读</span>    
                        </p>    
                        <i className="cutLine"></i>   
                        <p className="title-data__box">
                            <span className="yestarday">32 昨天</span>
                            <span className="allDay">998 总数</span>
                        </p>
                    </li>
                    <li>
                        <p className="title-icons__box SYGJ">
                            <Icon type="tool" theme="twoTone"  className="icons"/>
                            <span>工具使用</span>    
                        </p>    
                        <i className="cutLine"></i>   
                        <p className="title-data__box">
                            <span className="yestarday">32 昨天</span>
                            <span className="allDay">998 总数</span>
                        </p>
                    </li>
                </ul> 
                <div className="table__box">
                    <div className="table__left">
                        <section className="section">
                            <h4 className="box-title text-khgm">客户规模</h4>
                            <div className="sectionBox likesAndCommentBox">
                                <p className="likesNum">
                                    <span className="tit">累计点赞量</span>
                                    <span className="txt">2,201</span>
                                </p> 
                                <p className="commentNum">
                                    <span className="tit">累计评论量</span>
                                    <span className="txt">2,201</span>
                                </p>  
                            </div>
                        </section>
                        <section className="section">
                            <h4 className="box-title text-YHFB">用户分布</h4>
                            <div className="sectionBox fansDistribute">
                                <p className="likesNum">
                                    <span className="tit">北京</span>
                                    <span className="txt">2,201</span>
                                </p> 
                                <p className="commentNum">
                                    <span className="tit">上海</span>
                                    <span className="txt">2,201</span>
                                </p> 
                                <p className="commentNum">
                                    <span className="tit">广州</span>
                                    <span className="txt">2,201</span>
                                </p> 
                                <p className="commentNum">
                                    <span className="tit">深圳</span>
                                    <span className="txt">2,201</span>
                                </p> 
                                <p className="commentNum">
                                    <span className="tit">重庆 </span>
                                    <span className="txt">2,201</span>
                                </p>  
                            </div>
                        </section>
                        <section className="section">
                            <h4 className="box-title text-FBXX">发布信息</h4>
                            <div className="sectionBox likesAndCommentBox">
                                <p className="likesNum">
                                    <span className="tit">文章累计发布量</span>
                                    <span className="txt">2,201</span>
                                </p> 
                                <p className="commentNum">
                                    <span className="tit">工具累计发布量</span>
                                    <span className="txt">2,201</span>
                                </p>  
                            </div>
                        </section>
                    </div>
                    <div className="table__center">
                        <ChinaMap></ChinaMap>
                    </div> 
                    <div className="table__right">
                        <section className="section">
                            <h4 className="box-title text-YHFB">文章英雄榜</h4>
                            <div className="sectionBox artical__userSort">
                                <Spread data_Value = {this.state.articalData}/>
                            </div>
                        </section>
                        <section className="section">
                            <h4 className="box-title text-YHFB">工具英雄榜</h4>
                            <div className="sectionBox tools__userSort">
                                <Spread data_Value = {this.state.articalData}/>
                            </div>
                        </section>
                    </div>
                </div>  
            </div>
        )
    }
}