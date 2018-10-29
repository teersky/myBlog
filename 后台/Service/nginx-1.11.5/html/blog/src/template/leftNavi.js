import React, {
    Component
} from 'react';

import PropTypes from "prop-types";

import "./style.css"
import LeftNaviList from './leftNaviList';

var oUl_height = 0;
var old_Wid_W = -120;
var clickTip = 0;
var wid_W = null;

class leftNavi extends Component {
    constructor(props) {
        super(props); //第一步，这是必须的
        //不能调用state
        this.state = { //第二步，赋初始值
            oUl: {
                top: 0,
                left: 0
            },
            isListShow: false,
            start_T: 0,
            run_T: 0,
            end_T: 0,
            canDrag: false,
            props: props,
            endClickPoint: 0,
            pageMulse: 0,
            oldLocation: -120,
            openIndex: 0,
            showList: false,
            mouseDownPoint: 0,
            mouseMoveLen_list: 0
        };
    }
    
    static contextTypes = {
        isMouseUp: PropTypes.bool,
        showListTip: PropTypes.bool,
        windowWidth:PropTypes.string,
        mouseMoveLen:PropTypes.string,
        callback:PropTypes.func,
        bShowList__Tip: PropTypes.bool,
    }
    mouseDownEv(event) {
        let clientY = null;
        if(event.touches !== undefined){
             clientY = event.touches[0].clientY;
          }else{
            clientY = event.clientY;
          }
        let ScrollBox_all = this.ScrollBox_all.offsetHeight;
        let ScrollBox = oUl_height;
        if(ScrollBox > ScrollBox_all){
            this.setState({
                start_T: clientY,
                canDrag: true,
                pageMulse: ScrollBox - ScrollBox_all
            });
        }
    }
    mouseMoveEv(event) {
        let clientY = null;
        if(event.touches !== undefined){
            clientY = event.touches[0].clientY;
          }else{
            clientY = event.clientY;
          }
        if (this.state.canDrag === true) {
            let top_num = -(-clientY + this.state.start_T - this.state.endClickPoint);
            if( top_num > 0){
                top_num = 0;
            }
            if(top_num < -this.state.pageMulse){
                top_num =  -this.state.pageMulse
            }
            this.setState({
                run_T: clientY,
                oUl: {
                    top: top_num
                }
            });
        }
    }
    callBackDate(event) {
        oUl_height = event;
    }
    mouseUpEv() {
        this.setState({
            canDrag: false,
            endClickPoint: this.state.oUl.top
        });
    }
    mouseLeaveEv(){
        this.setState({
            canDrag: false,
            endClickPoint: this.state.oUl.top
        });
    }
    handleWheel(event) {
        console.log(event)
    }
    toRight__pointEv(){
        clickTip = !clickTip;
        if(clickTip){
            this.setState({
                showList: true
            })
        }else{
            this.setState({
                showList: false
            }) 
        }
    }
    
    mouseDownEv_2 (event){
        
        console.log("aaaa");
        if(this.context.isMouseUp){
            let clientX
            if(event.touches !== undefined){
            clientX = event.touches[0].clientX;
            }else{
            clientX = event.clientX;
            }
            if(clientX < 15){
            this.setState({
                showListTip: true
            });
            }
            this.setState({
            mouseDownPoint: clientX,
            mouseUp: false,
            mouseDown: true
            });
        }
      }
      mouseMoveEv_2(event){
          if(this.context.isMouseUp){
            if(this.state.mouseDownPoint  >= Number(this.context.windowWidth) - 240){
                if(this.state.mouseDown){
                    let clientX = null;
                    if(event.touches !== undefined){
                        clientX = event.touches[0].clientX;
                    }else{
                        clientX = event.clientX;
                    }
                    let a = clientX - this.state.mouseDownPoint;
                    if(a > 0){
                        a = 0;
                    }else if(a < -120){
                        a = -120;
                    }
                    console.log("a: " + a);
                    this.setState({
                        mouseMoveLen_list: a
                    });
                }
            }
        }
      }
      mouseUpEv_2(){
        let a = this.state.mouseMoveLen_list;
        if(a > -60){
            a = 0;
        }else{
            a = -120;
        }
        
        this.setState({
            mouseMoveLen_list: a
        });
        console.log(a);
        this.props.MakeMoney(a);
        wid_W = 0;
        old_Wid_W = -120;
      }
      componentWillReceiveProps(){
        const mouseMoveLen = Number(this.context.mouseMoveLen);
        const  ismouseup = this.context.isMouseUp;
        if(mouseMoveLen === 0 && ismouseup === false){
            this.setState({
                mouseMoveLen_list: 0
            });
            wid_W = 0;
            old_Wid_W = -120;
        } 
      }
    render() {
        const mouseMoveLen = Number(this.context.mouseMoveLen);
        const  windowWidth = Number(this.context.windowWidth);
        const  ismouseup = this.context.isMouseUp;
        if(windowWidth < 530){
            if(ismouseup){
                if(old_Wid_W === -120){
                    if(mouseMoveLen > 60){
                        wid_W = 0;
                        old_Wid_W = 0;
                    }else if(mouseMoveLen < 60 && mouseMoveLen !== 0 ){
                        wid_W = -120;
                        old_Wid_W = -120
                    }
                }else{
                    if(mouseMoveLen < -60){
                        wid_W = -120;
                        old_Wid_W = -120;
                    }else if(mouseMoveLen > -60 && mouseMoveLen < 0){
                        wid_W = 0;
                        old_Wid_W = 0
                    } 
                }
            }else{
                if(old_Wid_W === 0){
                    wid_W =  mouseMoveLen < -120 ? -120 :  mouseMoveLen >= 0? 0: (0 + mouseMoveLen);
                }else{
                    wid_W = (-120 + mouseMoveLen) < -120 ? -120 : (-120 + mouseMoveLen) >= 0?0: (-120 + mouseMoveLen);
                }
            }
            
        }
        return (
            <div className="div_style" style={{left:  wid_W === 0 && ismouseup === true ? this.state.mouseMoveLen_list : wid_W + "px"}} text={"text".split("")[0]}>
                <div className="scrollBox"  
                    onMouseDown={(event) => { this.mouseDownEv(event) }} onMouseMove={(event) => { this.mouseMoveEv(event) }} 
                    onMouseUp={(event) => { this.mouseUpEv(event) }} onMouseLeave={(event) => { this.mouseLeaveEv(event) }} 
                    onTouchStart={(event) => { this.mouseDownEv(event) }} onTouchMove={(event) => { this.mouseMoveEv(event) }} 
                    onTouchEnd={(event) => { this.mouseUpEv(event) }} onWheel={(event) => {this.handleWheel(event)}} 
                    ref={dom => {this.ScrollBox_all = dom}}>

                    <LeftNaviList callBackDate={ this.callBackDate.bind(this)} data = {this.state.oUl}/>
                </div>
                {/* <div className={this.state.showList === false ? "toRight__point" : "toRight__point toRight__point__show"} onClick = { () => {this.toRight__pointEv()}} ></div> */}
                <div className={Math.abs(wid_W === 0 ? this.state.mouseMoveLen_list : wid_W  ) < 30 ? "shadow shadow_SHow" : "shadow" } onMouseDown={(event) => {this.mouseDownEv_2(event)}} onMouseMove={(event) => {this.mouseMoveEv_2(event)}} onMouseUp={(event) => {this.mouseUpEv_2(event)}} onTouchStart={(event) => {this.mouseDownEv_2(event)}} onTouchMove={(event) => {this.mouseMoveEv_2(event)}} onTouchEnd={(event) => {this.mouseUpEv_2(event)}}></div>
            </div>
        )
    }
}


export default leftNavi