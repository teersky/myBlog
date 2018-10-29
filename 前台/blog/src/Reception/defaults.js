import React, {Component} from 'react';
import APIData from "../modules/get-api"

export default class Home extends Component {
    componentDidMount(){
        var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_=' + Math.random();
           /*  $.getJSON(url, function(data) {
                alert(data.Ip);
            }); */
        APIData.get("http://192.168.0.250:81/api/visitHandle/").then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        }); 
    }
    render() {
        return (
            <div>
                this is 前台
            </div>
        )
    }
}