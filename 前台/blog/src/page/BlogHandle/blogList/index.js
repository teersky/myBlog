import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import 'antd/dist/antd.css';
import APIData from "../../../modules/get-api"
import { Table, Divider, Tag, Input, Button, Icon } from "antd"
const List = [
    {
        key: '1',
        uId: "1541994285044",
        name: "测试文档1",
        type: ["Js"],
        likesNum: 126,
        answerNum: 40,
        readNum: 509
    }, {
        key: '2',
        uId: "1541993285044",
        name: "测试文档2",
        type: ["Js"],
        likesNum: 100,
        answerNum: 21,
        readNum: 203
    }, {
        key: '3',
        uId: "1541994225044",
        name: "测试文档3",
        type: ["Js"],
        likesNum: 214,
        answerNum: 56,
        readNum: 678
    }
]


export default class blogEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articalList: ""
        };
    }
    modifyEvs(self) {
        console.log(self);
    }
    deleteEvs() {
        alert("删除");
    }
    previewEvs(text, recode){
        console.log(text, recode);
    }

    state = {
        searchText: '',
    };

    componentWillMount(){
        let self = this;
        APIData.get("/apiGet/ArticalList/").then((result) => {
            var res = result.data;
            res.map((items, index) => {
                items.key = index;
                let arr = [];
                arr.push(items.artical_type);
                items.artical_type = arr;
            })
            self.setState({
                articalList: res
            });
            console.log(res);
        });
    }

    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }

    handleReset = clearFilters => () => {
        clearFilters();
        this.setState({ searchText: '' });
    }
    render() {
        const columns = [{
            title: '文章名称',
            dataIndex: 'artical_name',
            key: 'artical_name',
        }, {
            title: '类型',
            dataIndex: 'artical_type',
            key: 'artical_type',
            render: tags => (
                <span>
                    {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                </span>
            ),
        }, {
            title: '时间',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.uId - b.uId,
        }, {
            title: '点赞量',
            dataIndex: 'likesNum',
            key: 'likesNum',
            sorter: (a, b) => a.likesNum - b.likesNum,
        }, {
            title: '回复量',
            dataIndex: 'answerNum',
            key: 'answerNum',
            sorter: (a, b) => a.answerNum - b.answerNum,
        }, {
            title: '阅读量',
            dataIndex: 'readNum',
            key: 'readNum',
            sorter: (a, b) => a.readNum - b.readNum,
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    {/* <Route href="javascript:;" onClick={() => { this.previewEvs(text) }}>预览</Route> */}
                    <Link to={ "/BackStage/blogShow/" }>预览</Link>
                    <Divider type="vertical" />
                    <a href="javascript:;" onClick={() => { this.modifyEvs(text) }}>修改</a>
                    <Divider type="vertical" />
                    <a href="javascript:;" onClick={() => { this.deleteEvs(text) }}>删除</a>
                </span>
            ),
        }];

        return (
            <Table dataSource={ this.state.articalList } columns={columns} bordered />
        )
    }
}