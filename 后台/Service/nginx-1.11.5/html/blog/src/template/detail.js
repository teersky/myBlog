import React, {Component} from 'react';
import {
    Route,
} from 'react-router-dom';
import PropTypes from "prop-types";
import Home from '../page/Home/index';
import Page01 from '../page/page1/index';
import Page02 from '../page/page2/index';
import Page03 from '../page/page3/index';


class Detail extends Component{
    static contextTypes = {
        RouteList: PropTypes.string,
    }
    render(){
        const  RouteList = JSON.parse(this.context.RouteList) || [];
        console.log("aaa")
        return(
            <div>
                <Route exact path="/BackStage/" component={Home}></Route>
                <Route path="/BackStage/msgShow" component={Page01}></Route>
                <Route path="/BackStage/BlogHandle" component={Page02}></Route>
                <Route path="/BackStage/userComments" component={Page03}></Route>  
        
            </div>
        )
    }
}

export default Detail;