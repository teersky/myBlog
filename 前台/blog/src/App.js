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
let Style={
  box:{height: '100%'}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     routeIndex: 0
    };
  }

  componentWillMount(){
    let checkUserList = {}
    
    let users = sessionStorage.getItem('user') || "";
    let key = sessionStorage.getItem('key') || "";
    if(users === "" && key === ""){
      this.setState({
        routeIndex: 2
      })
    }else{
      checkUserList.username = users;
      checkUserList.apiKey = key;
      APIData.post("http://192.168.1.250:81/api/CheckLogin/",JSON.stringify(checkUserList))
        .then((result) => {
            console.log(users.toString(), result);
            if(result.state == "-404"){
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
  }
  componentDidMount(){
    console.log(this.state.routeIndex);
  }
  render() {
    if(this.state.routeIndex == 0){
        return (
          <div style={ Style.box }>
            <Loading />
          </div>
        );
    }else if((this.state.routeIndex == 1)){
      return (
        <div style={ Style.box }>
          <PageDetail />
        </div>
      );
    }else if((this.state.routeIndex == 2)){
      return (
        <div style={ Style.box }>
          <Login />
        </div>
      );
    }
  /*  return (
      <Router>
        <div style={ Style.box }>

          {
            console.log(this.state.routeIndex)
           
          }
          <Route exact path="/" component={ PageDetail } ></Route>         
          <Route path="/Login"  component={ Login } ></Route> 
          <Route path="/Loading" component={ Loading } ></Route>
        </div>
      </Router>
    ); */
  }
}

export default App;