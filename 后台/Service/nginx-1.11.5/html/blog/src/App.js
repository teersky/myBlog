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
import BackStage from "./Backstage"
import Re__index from "./Reception/defaults"
let Style={
  box:{height: '100%'}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      return (
        <Router>
          <div style={ Style.box }>
            <Route  exact path="/" component={ Re__index }></Route> 
            <Route path="/BackStage" component={BackStage}></Route> 
          </div>
        </Router>
      )
  }
}

export default App;