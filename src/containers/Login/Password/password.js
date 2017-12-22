import React,{Component} from 'react';
import './password.less'
import {connect} from 'react-redux'
class Password extends Component{
    constructor(){
        super();
        this.state={flag:false}
    }
    handleChange=()=> {

    }
    handleLogin=()=>{
        let username=this.username.value;
        let password=this.password.value;
        this.props.login({username,password})
    }
    render(){
        return (
            <div>
            <div className="password">
                <input ref={input=>this.username=input} type="text" placeholder="手机号/邮箱/用户名"/>
                <input ref={input=>this.password=input} type="password" placeholder="密码"/>
                <div onClick={this.handleChange}>
                    <div className="password_1">
                        <div className="password_2"></div>
                        <span>...</span>
                    </div>
                    <div
                        className="password_3">
                        <div className="password_2"></div>
                        <span>abc</span>
                    </div>
                </div>
            </div>
                <button onClick={this.handleLogin}>登录</button>
                <span>关于我们</span>
            </div>
        )
    }
}
export default connect(
    state=>state,
)(Password)


