import React, {Component} from 'react';
import $ from 'jquery';


export default class Home extends Component {
    componentWillMount(){
        $(function(){
            alert("aaa");
        })
    }
    render() {
        return (
            <div className="MapBox">
                
            </div>
        )
    }
}