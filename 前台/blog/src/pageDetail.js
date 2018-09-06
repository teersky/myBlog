import React, {
    Component
  } from 'react';
  import {
    BrowserRouter as Router,
  } from 'react-router-dom';
  
  
  import PropTypes from "prop-types";
  import 'antd/dist/antd.css';
  
  import './App.css';
  import TopBar from './template/top';
  import LeftNavi from './template/leftNavi';
  import Detail from './template/detail';
  import APIData from "./modules/get-api"
  
  let style = {
    app: {
      height: "100%"
    },
    page_top: {
      width: "100%",
      height: "65px",
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
  class PageDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        keyUp: false,
        mouseDownPoint: 0,
        mouseMoveLen: 0,
        windowWidth: 0,
        mouseUp: false,
        mouseDown: false,
        listArr: [],
        RouteList: []
      };
    }
    MouseUpEv() {
      this.setState({
        keyUp: true
      });
    }
    static childContextTypes = {
      isMouseUp:PropTypes.bool,
      windowWidth:PropTypes.string,
      mouseMoveLen:PropTypes.string,
      callback:PropTypes.func,
      apiData: PropTypes.string,
      RouteList: PropTypes.string,
    }
   
  
    // 父组件提供一个函数，用来返回相应的 context 对象
    getChildContext(){
        return{
            isMouseUp: this.state.mouseUp,
            windowWidth: this.state.windowWidth.toString(),
            mouseMoveLen: this.state.mouseMoveLen.toString(),
            callback: this.callback.bind(this),
            apiData: JSON.stringify(this.state.listArr),
            RouteList: JSON.stringify(this.state.RouteList),
        }
    }
    callback(msg){
     
    }
    mouseDownEv (event){
      let clientX
      if(event.touches !== undefined){
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
        if(event.touches !== undefined){
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
    componentWillMount(){
      APIData.get("http://127.0.0.1/Data/data.json")
      .then((result) => {
          this.setState({
            listArr: result.listArr,
            RouteList: result.RouteIndexList
          });
      })
      .catch((error) => {
          console.log(error);
      })
    }
    componentDidMount(){
      let el =  this.divStyle;
      this.setState({
        windowWidth: el.offsetWidth
      });
    }
    
    render() {
      
      return (
        <Router>
          <div className="App" style={ style.app } onMouseUp={ () => {this.MouseUpEv() }} ref={dom => {this.divStyle = dom}}>
            <div className="page_top" style={ style.page_top }>
              <TopBar title="首页" />
            </div>
            <div className="page_detail" style={ style.page_detail }>
                <LeftNavi title="首页" style={style.left_navi} status={this.state.keyUp}/>
                <div className="detailBox"  onMouseDown={(event) => {this.mouseDownEv(event)}} onMouseMove={(event) => {this.mouseMoveEv(event)}} onMouseUp={() => {this.mouseUpEv()}} onTouchStart={(event) => {this.mouseDownEv(event)}} onTouchMove={(event) => {this.mouseMoveEv(event)}} onTouchEnd={() => {this.mouseUpEv()}}>
                   <Detail />
                </div>
            </div>
          </div>
        </Router>
      );
    }
  }
  
  export default PageDetail;