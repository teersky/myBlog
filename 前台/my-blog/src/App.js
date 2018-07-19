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
    let a = {}
    a.x = "user";
    a.y = 20;
    

    let users = sessionStorage.getItem('user');
    let key = sessionStorage.getItem('key');
    APIData.post("http://127.0.0.1/Data/login.json",JSON.stringify(a))
      .then((result) => {
          console.log(users.toString(), result.user);
          if(users.toString() === result.user){
            if(key.toString() === result.key){
              console.log(this);
              this.setState({
                routeIndex: 1
              })
            }else{
              this.setState({
                routeIndex: 2
              })
            }
          }else{
            this.setState({
              routeIndex: 2
            })
          }
      })
      .catch((error) => {
          console.log(error);
      })
  }
  componentDidMount(){
    console.log(this.state.routeIndex);
  }
  render() {
    
    return (
      <Router>
        <div style={ Style.box }>
            <Route exact path="/" component={PageDetail}/>
            <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;