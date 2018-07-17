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
        console.log(this.context.RouteList);
        const  RouteList = JSON.parse(this.context.RouteList) || [];
        return(
            <div>
                {
                    RouteList.map((items, val) => {
                        if (RouteList !== []){
                            console.log(items);
                            <Route path={ items.linkTo } component={ items.RouteIndex }></Route>
                        }
                    })
                }
                
            {/* <Route path="/msgShow" component={Page01}></Route>
                <Route path="/BlogHandle" component={Page02}></Route>
                <Route path="/userComments" component={Page03}></Route>  
            */}
            </div>
        )
    }
}

export default Detail;