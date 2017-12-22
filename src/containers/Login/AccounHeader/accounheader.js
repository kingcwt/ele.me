import React,{Component} from 'react';
import "./accounheader.less"
import {Link} from 'react-router-dom';
export default class AccounHeader extends Component{
    render(){
        return (
         <div className="Accoun">
           <div className="Accoun_header">
             <i className="iconfont icon-fanhui" onClick={()=>this.props.history.goBack()}></i>
              <span>账户信息</span>
           </div>
             <div className="Accoun_body">
                <ul className="head_portrait">
                    <li className="head_1">
                        <p>头像</p>
                        <span>
                         <i className="header_img"></i>
                         <i className="header_f"></i>
                        </span>
                    </li>
                    <li className="head_2">
                        <p>用户名</p>
                        <span>
                            <i className="header_pathname">123123</i>
                            <i className="header_f"></i>
                        </span>
                    </li>
                </ul>
                 <h2>账号绑定</h2>
                 <ul className="bind_on_account">
                     <li>
                         <span className="bind_1">
                             <i>
                                 <img src={require("../image/iPhone.jpg")} />
                             </i>
                             <p>手机</p>
                         </span>
                         <span className="bind_2">
                             <i className="bind_iphone">176****4479</i>
                             <i className="bind_f"></i>
                         </span>
                     </li>
                 </ul>
                 <h2>安全设置</h2>
                <ul className="change_password">
                   <li>
                       <p>登录密码</p>
                       <span>
                           <i className="text"><Link to="/changepassword">修改</Link></i>
                           <i className="change_password_f"></i>
                       </span>
                   </li>
                </ul>
                 <button>退出登录</button>
             </div>
         </div>
        )
    }
}