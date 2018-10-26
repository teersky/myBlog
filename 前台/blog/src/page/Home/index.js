import React, {Component} from 'react';
import { Icon } from 'antd';
import "./index.css";

export default class Home extends Component {
    render() {
        return (
            <div className="defaultBox">
                <ul className="title_List">
                    <li>
                        <p class="title-icons__box LKFW">
                            <Icon type="coffee" theme="twoTone"  className="icons"/>
                            <span>访客</span>    
                        </p>    
                        <i className="cutLine"></i>   
                        <p class="title-data__box">
                            <span className="yestarday">20 昨天</span>
                            <span className="allDay">1024 总数</span>
                        </p>
                    </li>
                    <li>
                        <p class="title-icons__box BWCK">
                            <Icon type="file" theme="twoTone"  className="icons"/>
                            <span>文章阅读</span>    
                        </p>    
                        <i className="cutLine"></i>   
                        <p class="title-data__box">
                            <span className="yestarday">32 昨天</span>
                            <span className="allDay">998 总数</span>
                        </p>
                    </li>
                    <li>
                        <p class="title-icons__box SYGJ">
                            <Icon type="tool" theme="twoTone"  className="icons"/>
                            <span>工具使用</span>    
                        </p>    
                        <i className="cutLine"></i>   
                        <p class="title-data__box">
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
                    </div>
                </div> 
            </div>
        )
    }
}