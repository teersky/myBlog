import React, {
    Component
  } from 'react';
  import {
    BrowserRouter as Router,
  } from 'react-router-dom';

  
  class Loading extends Component{
      render(){
          return (
              <div>
                  加载中，请稍后。。。
              </div>
          )
      }
  }

  export default Loading;