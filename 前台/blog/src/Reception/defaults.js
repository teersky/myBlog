import React, {Component} from 'react';
import APIData from "../modules/get-api"

export default class Home extends Component {
    componentDidMount(){
        setTimeout(() => {
            let IP = sessionStorage.getItem("ip") || "192.168.0.250";
            let Location = JSON.parse(sessionStorage.getItem("location")) || {province: "甘肃省", "city": "兰州市", "district": "城关区"}; 
            let url = "http://192.168.0.250:81/api/visitHandle/?IP="+ IP + "&province=" +Location.province+ "&city=" +Location.city+ "&district=" + Location.district;
            APIData.get(url).then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            }); 
        }, 5000);
    }
    render() {
        return (
            <div>
                this is 前台
            </div>
        )
    }
}
