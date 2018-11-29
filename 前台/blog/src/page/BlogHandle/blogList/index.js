import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import 'antd/dist/antd.css';
import APIData from "../../../modules/get-api"
import moment from 'moment'
import { Table, Divider, Tag, Modal } from "antd"

export default class blogEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articalList: "",
            visible: false,
            confirmLoading: false,
            ModalText: '',
            deleteObject: ""
        };
    }
    modifyEvs(self) {
        console.log(self);
    }
    deleteEvs(text) {
        console.log("删除", text);
        this.setState({
            visible: true,
            ModalText: '您确定要删除《'+text.artical_name+"》吗?",
            deleteObject: text
        });
    }

    componentWillMount(){
        let self = this;
        APIData.get("/apiGet/ArticalList/").then((result) => {
            var res = result.data;
            if(res != "" && res.length > 0){
                res.map((items, index) => {
                    items.key = index;
                    let arr = [];
                    arr.push(items.artical_type);
                    items.artical_type = arr;
                })
                self.setState({
                    articalList: res
                });
            }
            console.log(res);
        });
    }

    handleOk = () => {
        let  self = this;
        this.setState({
            ModalText: '正在删除《'+this.state.deleteObject.artical_name+"》中， 请稍后...",
            confirmLoading: true,
        });
        var json = {uid: this.state.deleteObject.id}
        APIData.post("/apiPost/deleteArtical/", json).then((result) => {
            console.log(result);
            var res = result.data;
            if(res != "" && res.length > 0){
                res.map((items, index) => {
                    items.key = index;
                    let arr = [];
                    arr.push(items.artical_type);
                    items.artical_type = arr;
                })
                self.setState({
                    articalList: res,
                    visible: false,
                    confirmLoading: false,
                });
            }
        });
    }
    
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
    }

    render() {
        const columns = [{
            title: '文章名称',
            dataIndex: 'artical_name',
            key: 'artical_name',
            align: "center",
        }, {
            title: '类型',
            dataIndex: 'artical_type',
            key: 'artical_type',
            align: "center",
            render: tags => (
                <span>
                    {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                </span>
            ),
        }, {
            title: '时间',
            dataIndex: 'id',
            key: 'id',
            align: "center",
            render: tags => (
                <span>{ moment(parseInt(tags)).format("YYYY-MM-DD HH:mm:ss") }</span>
            ),
        }, {
            title: '点赞量',
            dataIndex: 'likesnum',
            key: 'likesNum',
            align: "center",
            sorter: (a, b) => a.likesNum - b.likesNum,
        }, {
            title: '回复量',
            dataIndex: 'answernum',
            key: 'answerNum',
            align: "center",
            sorter: (a, b) => a.answerNum - b.answerNum,
        }, {
            title: '阅读量',
            dataIndex: 'readnum',
            key: 'readNum',
            align: "center",
            sorter: (a, b) => a.readNum - b.readNum,
        }, {
            title: 'Action',
            key: 'action',
            align: "center",
            render: (text, record) => (
                <span>
                    <Link to={ 
                        {
                            pathname : "/BackStage/blogShow/",
                            state:{key: text.id}
                        }
                    } >预览</Link>
                    <Divider type="vertical" />
                    <Link to={ 
                        {
                            pathname : "/BackStage/blogChange/",
                            state:{key: text.id}
                        }
                    } >修改</Link>
                    <Divider type="vertical" />
                    <a href="javascript:;" onClick={() => { this.deleteEvs(text) }}>删除</a>
                </span>
            ),
        }];

        return (
            <div>
                <Table dataSource={ this.state.articalList } columns={columns} bordered style={{padding: "10px 6px 0 10px"}}/>
                <Modal title="Title"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                    >
                    <p>{this.state.ModalText}</p>
                </Modal>
            </div>
        )
    }
}