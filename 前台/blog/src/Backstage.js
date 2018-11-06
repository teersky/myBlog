import React, {
    Component
  } from 'react';
  import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  
  
  import PropTypes from "prop-types";
  import 'antd/dist/antd.css';
  
  import './App.css';
  import PageDetail from './pageDetail';
  import Login from './page/login/lgoin';
  import Loading from './page/loading/loading';
  import APIData from "./modules/get-api"
  import Socket from './modules/webSocket'

  let Style={
    box:{height: '100%'}
  }
  
  class Backstage extends Component {
    constructor(props) {
      super(props);
      this.state = {
       routeIndex: 0
      };
    }
    
    componentWillMount(){

      let aa = Socket.init();
      console.log(aa);


      let checkUserList = {};
      APIData.post("http://192.168.0.250:81/apiPost/CheckLogin/",checkUserList)
        .then((result) => {
            if(result.state === -1 || result.state === -404 ){
              this.setState({
                routeIndex: 2
              })
              
            }else{
              this.setState({
                routeIndex: 1
              })
            }
        })
        .catch((error) => {
            console.log(error);
        }) 
      
    }
    componentDidMount(){
      setInterval(function(){
        Socket.send("你好世界")
      }, 2000)
      
    }
    render() {
      if(this.state.routeIndex === 0){
          return (
            <div style={ Style.box }>
              <Loading />
            </div>
          );
      }else if((this.state.routeIndex === 1)){
        return (
          <div style={ Style.box }>
            <PageDetail />
          </div>
        );
      }else if((this.state.routeIndex === 2)){
        return (
          <div style={ Style.box }>
             <Login />
            {/* <Route path="/Login"  component={ Login } ></Route>  */}
          </div>
        );
      }
    }
  }
  
  export default Backstage;