import React, {
        Component
    } from 'react';
    import {
        BrowserRouter as Router,
    } from 'react-router-dom';

    
    class Login extends Component{
        submitData(){
            sessionStorage.setItem('user','admin'); 
            sessionStorage.setItem('key','68E109F0F40CA72A15E05CC22786F8E6'); 
            window.location.reload();
        }
        render(){
            return (
                <div>
                    <button onClick={this.submitData}>提交</button>
                </div>
            )
        }
    }

  export default Login;