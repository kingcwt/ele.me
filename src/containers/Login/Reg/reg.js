import React,{Component} from 'react';
import './massage.less'
import {connect} from 'react-redux'
import actions from '../../../store/actions/session'
 class Reg extends Component{
     handleLogin=()=>{
         let username=this.username.value;
         let password=this.password.value;
         this.props.login({username,password})
     }
    render(){
        return (
            <div>
         <div className="massage">
          <input ref={input=>this.username=input} type="text" placeholder="手机号"/>
          <input ref={input=>this.password=input} type="text"  placeholder="密码"/>
          <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意 <a href="###">《用户服务协议》</a></p>
         </div>
        <button onClick={this.handleLogin}>登录</button>
        <span>关于我们</span>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Reg)