import React, {
    Component
} from 'react';
import {
    Avatar,
    Button
} from 'antd';
import "./temp.css";

const day = ["日", "一", "二", "三", "四", "五", "六"];
const style = {
    style_box: {
        background: "url(../imagesbox-bg-head.a1ad90d.png) no-repeat top / 100% auto"
    },
    data_style: {
        "fontSize" : "12px",
        "color": "#0c1828",
        padding: 0,
        margin: 0,
        "lineHeight": "1.5em"
    },
    time_style: {
        "fontSize" : "18px",
        "color": "#0c1828",
        padding: 0,
        margin: 0,
        "lineHeight": "1.5em"
    }
}

class timeShow extends Component {
    constructor(props) {
        super(props); //第一步，这是必须的
        //不能调用state
        this.state = {
            year: "",
            month: "",
            date: "",
            day: "",
            hours: "",
            minute: "",
            second: ""
        }
    }

    componentWillMount(){
        let self = this;
        setInterval(function(){
            var dt = new Date();
            console.log(dt.getFullYear());
            self.setState({
                year: dt.getFullYear(),
                month: self.toDou(dt.getMonth()),
                date: self.toDou(dt.getDate()),
                day: dt.getDay() ,
                hours: self.toDou(dt.getHours()),
                minute: self.toDou(dt.getMonth()),
                second: self.toDou(dt.getSeconds())
            });
        }, 1000);
    }
    toDou(n){
        return n > 10 ? n : "0" + n;
    }
    render() {
        const cb = (msg) => {
            return () => {
                this.context.callback(msg);
            }
        }
        return (
            <div className="style_box">
                <p className="data_style">{ this.state.year + "年" +  this.state.month + "月" + this.state.date +"日" + "   星期" + day[this.state.day] }</p>
                <p className="time_style">{ this.state.hours + ":" +this.state.minute + ":" + this.state.second }</p>
            </div>
        )
    }
}


export default timeShow;