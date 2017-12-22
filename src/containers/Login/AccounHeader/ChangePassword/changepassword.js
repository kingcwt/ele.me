import React,{Component} from 'react';
import './changepassword.less'
export default class ChangePassword extends Component{
    render(){
        return (
            <div className="change">
                <div className="change_header">
                    <i className="iconfont icon-fanhui" onClick={()=>this.props.history.goBack()}></i>
                    <span>账户信息</span>
                </div>
                <div className="change_body">
                    <ul>
                      <li>
                       <input type="password" placeholder="旧密码"/>
                       <span>密码长度为 6－20 位</span>
                      </li>
                      <li>
                       <input type="password" placeholder="新密码"/>
                       <span>密码长度为 6－20 位</span>
                      </li>
                      <li>
                       <input type="password" placeholder="确认密码"/>
                       <span>两次密码输入不一致</span>
                      </li>
                    </ul>
                    <button type="button" disabled="disabled">确认并保存</button>
                </div>
            </div>
        )
    }
}