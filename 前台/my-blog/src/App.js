import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Col
} from 'antd';
import PropTypes from "prop-types";
import 'antd/dist/antd.css';

import './App.css';
import TopBar from './template/top';
import LeftNavi from './template/leftNavi';
import Home from './page/Home/index';
import Page01 from './page/page1/index';
import Page02 from './page/page2/index';
import Page03 from './page/page3/index';

let style = {
  app: {
    height: "100%"
  },
  page_top: {
    width: "100%",
    height: "65px",
    background: "#ffffff",
    background: "#2d2828",
    boxShadow: "3px 3px 10px #888888"
  },
  page_detail: {
    width: "100%",
    height: "calc(100% - 65px)",
    position: "relative",
    cursor: "pointer"
  },
  left_navi: {
    height: "100%",
    overflow: 'scroll'
  }
}

class App extends Component {
  constructor(props) {
    super(props); //第一步，这是必须的
    //不能调用state
    this.state = { //第二步，赋初始值
      keyUp: false,
      mouseDownPoint: 0,
      mouseMoveLen: 0
    };
  }
  MouseUpEv() {
    this.setState({
      keyUp: true
    });
  }
  handleEv(event) {
    //console.log("event:"+event)
  }

  static childContextTypes = {
      mouseMoveLen:PropTypes.string,
      callback:PropTypes.func,
  }

  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext(){
      return{
          mouseMoveLen: this.state.mouseMoveLen,
          callback: this.callback.bind(this)
      }
  }
  callback(msg){
    console.log(msg)
  }
  mouseDownEv (event){
    //console.log(event.clientX || event.touches[0].clientX);
    let e = event || event.touches[0]
    this.setState({
      mouseDownPoint: e.clientX
    });
  }
  mouseMoveEv(event){
    let e = event || event.touches[0]
    this.setState({
      mouseMoveLen: e.clientX - this.state.mouseDownPoint
    });
  }
  render() {
    return (
      <Router>
        <div className="App" style={ style.app } onMouseUp={ () => {this.MouseUpEv() }}>
          <div className="page_top" style={ style.page_top }>
            <TopBar title="首页" />
          </div>
          <div className="page_detail" style={ style.page_detail } onMouseDown={(event) => {this.mouseDownEv(event)}} onTouchStart={(event) => {this.mouseDownEv(event)}} onTouchMove={(event) => {console.log(event.touches[0].clientX)}}>
              <LeftNavi title="首页" style={style.left_navi} status={this.state.keyUp} handleEv={this.handleEv.bind(this)} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;