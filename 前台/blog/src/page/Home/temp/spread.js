import React, {Component} from 'react';

const style = [{
    color: "#fb0505"
    },{
        color: "#fb6705"
    },{
        color: "#fbb805"
    },{
        color: "#fbed05"
    },{
        color: "#b3fb05"
    },{
        color: "#62fb05"
    },{
        color: "#02ffd8"
    },{
        color: "#02a3ff"
    },{
        color: "#0244ff"
    },{
        color: "#7902ff"
    },{
        color: "#f602ff"
    },{
        color: "#ff02a9"
    },{
        color: "#ff025b"
    }];
export default class Spread extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            cxt: "",
            data: this.props.data_Value,
            oldScale: 0.16
        };
        this.drawSpreads = this.drawSpreads.bind(this)
    }
    componentDidMount(){
       // this.drawSpreads();
        var canvas = this.canvas;
        let context = canvas.getContext("2d");
        var w = canvas.offsetWidth;
        var h = canvas.offsetHeight;
        this.setState({
            width: w ,
            height: h ,
            context: context
        }); 
    }
    componentDidUpdate(){
        this.drawSpreads(); 
    }
    drawSpreads(){
        this.state.context.clearRect(0,0,this.state.width, this.state.height)
        this.state.data.map((items, index) => {
            this.drawOneSpread(index)
        })
    }
    drawOneSpread(index){
        let r = (this.state.oldScale - 0.012 * index) * this.state.height;
        let x = this.rnd(r, this.state.width - r);
        let y = this.rnd(r, this.state.height - r);
        this.state.context.beginPath()
        this.state.context.fillStyle = style[index].color
        this.state.context.arc(x, y, r, 0, 2 * Math.PI, false);
        this.state.context.fill();
        this.state.context.closePath();
        this.state.context.beginPath();
        this.state.context.font = 28 * ((10 - index) / 10)+"px Arial";
        this.state.context.fillStyle="#fff";
        this.state.context.fillText(index+ 1, x + (r - 28 * ((10 - index) / 10) * 1.3) / 2, y + (r - 28 * ((10 - index) / 10)* 0.3) / 2);
        this.state.context.fill();
        this.state.context.closePath()
    }
    mouseEnterFns(event){
        console.log(event);
    }
    rnd(min, max){
        return parseInt(Math.random()*(max-min+1)+min,10);
    }
    render(){
        return(
            <div style={{width: "100%", height: "100%", position: "relative", padding: '0 6px'}} id="spread">
                <canvas ref={ref => (this.canvas = ref)} style={{width: "100%", height: "100%"}} width={this.state.width} height={this.state.height}
                onMouseEnter={(event) => { this.mouseEnterFns(event) }}></canvas>
               {/*  <div className="toolTipBox">
                    <p>Node.js用法和注意事项</p>  
                    <p>浏览量：320</p>
                    </div> */}
            </div>
        )
    }
} 
