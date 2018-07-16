import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import PropTypes from "prop-types";
import 'antd/dist/antd.css';

import './App.css';
import TopBar from './template/top';
import LeftNavi from './template/leftNavi';
import Home from './page/Home/index';
import Page01 from './page/page1/index';
import Page02 from './page/page2/index';
import Page03 from './page/page3/index';
import APIData from "./modules/get-api"

let style = {
  app: {
    height: "100%"
  },
  page_top: {
    width: "100%",
    height: "65px",
    background: "#ffffff",
    background: "#2d2828",
    boxShadow: "3px 3px 10px #888888",
    position: 'relative',
    zIndex: 10
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
let wid_w = 0;
class App extends Component {
  constructor(props) {
    super(props); //第一步，这是必须的
    //不能调用state
    this.state = { //第二步，赋初始值
      keyUp: false,
      mouseDownPoint: 0,
      mouseMoveLen: 0,
      windowWidth: 0,
      mouseUp: false,
      mouseDown: false,
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
    isMouseUp:PropTypes.bool,
      windowWidth:PropTypes.string,
      mouseMoveLen:PropTypes.string,
      callback:PropTypes.func,
  }
 

  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext(){
      return{
          isMouseUp: this.state.mouseUp,
          windowWidth: this.state.windowWidth.toString(),
          mouseMoveLen: this.state.mouseMoveLen.toString(),
          callback: this.callback.bind(this)
      }
  }
  callback(msg){
   
  }
  mouseDownEv (event){
    let clientX
    if(event.touches != undefined){
      clientX = event.touches[0].clientX;
    }else{
      clientX = event.clientX;
    }
   
    this.setState({
      mouseDownPoint: clientX,
      mouseUp: false,
      mouseDown: true
    });
  }
  mouseMoveEv(event){
    if(this.state.mouseDown){
      let clientX = null;
      if(event.touches != undefined){
        clientX = event.touches[0].clientX;
      }else{
        clientX = event.clientX;
      }
      this.setState({
        mouseMoveLen: clientX - this.state.mouseDownPoint
      });
    }
  }
  mouseUpEv(){
    this.setState({
      mouseUp: true,
      mouseDown: false
    })
  }
  componentDidMount(){
    let el =  this.divStyle;
    wid_w = el.offsetWidth
    this.setState({
      windowWidth: el.offsetWidth
    });
  }
  
  render() {
    APIData.get("http://www.weather.com.cn/data/sk/101190408.html")//调用自定义组件方法，返回一个Promise
    .then((result) => {//then函数会返回一个新的promise
        // this.setState({
        //     result:JSON.stringify(result),//序列化：转换为一个 (字符串)JSON字符串
        // });
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
        // this.setState({
        //     result: JSON.stringify(error),//把错误信息格式化为字符串
        // })
    })
    return (
      <Router>
        <div className="App" style={ style.app } onMouseUp={ () => {this.MouseUpEv() }} ref={dom => {this.divStyle = dom}}>
          <div className="page_top" style={ style.page_top }>
            <TopBar title="首页" />
          </div>
          <div className="page_detail" style={ style.page_detail }>
              <LeftNavi title="首页" style={style.left_navi} status={this.state.keyUp} handleEv={this.handleEv.bind(this)} />
              <div className="detailBox"  onMouseDown={(event) => {this.mouseDownEv(event)}} onMouseMove={(event) => {this.mouseMoveEv(event)}} onMouseUp={() => {this.mouseUpEv()}} onTouchStart={(event) => {this.mouseDownEv(event)}} onTouchMove={(event) => {this.mouseMoveEv(event)}} onTouchEnd={() => {this.mouseUpEv()}}>
                  <Route path="/msgShow" component={Page01}></Route>
                  <Route path="/BlogHandle" component={Page02}></Route>
              </div>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;