import React, {Component} from 'react';
import {
    Route,
} from 'react-router-dom';
import PropTypes from "prop-types";
import Home from '../page/Home/index';
import MsgShow from '../page/MsgShow/index';
import BlogHandle from '../page/BlogHandle/index';
import userComments from '../page/userComments/index';
import blogEditor from "../page/BlogHandle/blogEditor/index"
import blogList from "../page/BlogHandle/blogShow/index"

const style={
    padding: '0px'
};

class Detail extends Component{
    static contextTypes = {
        RouteList: PropTypes.string,
    }
    render(){
        const  RouteList = JSON.parse(this.context.RouteList) || [];
        return(
            <div style={ style } >
                <Route exact path="/BackStage" component={Home}></Route>
                <Route path="/BackStage/msgShow" component={MsgShow}></Route>
                <Route path="/BackStage/BlogHandle" component={BlogHandle}></Route>
                <Route path="/BackStage/userComments" component={userComments}></Route>   
                <Route path="/BackStage/blogEditor" component={blogEditor}></Route>   
                <Route path="/BackStage/blogList" component={blogList}></Route>
            </div>
        )
    }
}

export default Detail;