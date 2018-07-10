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
    height: "calc(100% - 65px)"
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
      keyUp: false
    };
  }
  MouseUpEv() {
    console.log("keyUp");
    this.setState({
      keyUp: true
    });
  }
  handleEv(event) {
    console.log("event:"+event)
  }

  static childContextTypes = {
      color:PropTypes.string,
      callback:PropTypes.func,
  }

  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext(){
      return{
          color:"red",
          callback:this.callback.bind(this)
      }
  }

  render() {
    return (
      <Router>
        <div className="App" style={ style.app } onMouseUp={ () => {this.MouseUpEv() }}>
         {/*  <Row>
            <Col span={4}>
              <LeftNavi title="首页"/>
            </Col>
            <Col span={20}>
              <TopBar title="首页"/>
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/page1" component={Page01} />
                <Route path="/page2" component={Page02} />
                <Route path="/page3" component={Page03} />
              </div>
            </Col>
          </Row> */}

          <div className="page_top" style={ style.page_top }>
            <TopBar title="首页" />
          </div>
          <div className="page_detail" style={ style.page_detail }>
              <LeftNavi title="首页" style={style.left_navi} status={this.state.keyUp} handleEv={this.handleEv.bind(this)} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;