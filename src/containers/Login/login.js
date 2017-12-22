import React,{Component} from 'react';
import './login.less'
import {Link,Route,NavLink} from 'react-router-dom';
import Reg from "./Reg/reg";
import Password from "./Password/password";
export default class Login extends Component{
    render(){
     return (
       <div className="login">
           <div className="login_body">
         <div className="login_logo">
           <img src={require("./image/eleHeader.png")}  alt=""/>
         </div>
            <div className="login_mp">
                <NavLink to="/login/reg">手机登录</NavLink>
                <NavLink exact to="/login">密码登录</NavLink>
            </div>
          <div>
              <Route path="/login/reg" component={Reg}/>
              <Route exact path="/login" component={Password}/>
          </div>

           </div>
       </div>
        )
    }
}