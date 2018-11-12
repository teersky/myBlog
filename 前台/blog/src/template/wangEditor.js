import React, { Component } from 'react';
import { Input,  Divider, Button  } from 'antd'
import './style.css'

export default class blogEditor extends Component {
    render() {
        const artical__tips = this.props.artical__tips;
        return (
            <div className="EditorBox">
                <Divider>头部</Divider>
                <p className="Editor__Header">
                    <span>标题：</span>
                    <Input placeholder="请输入文章标题" />
                </p>
                <section>
                    <div className="Editor__Header">
                        <span>分类：</span>
                        <div>
                            <Input placeholder="请输入文章分类" />
                            <p className="Editor__Tips">
                                {
                                    artical__tips.map((items) => {
                                        return <Button size="small">{items}</Button>
                                    })
                                }
                            </p>
                        </div>
                    </div>
                </section>
                <Divider>正文</Divider>
           </div>

        )
    }
}