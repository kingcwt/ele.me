import React,{Component} from 'react'
import './index.less'
import {NavLink } from 'react-router-dom'

class Tab extends Component{
    render(){
        return(
           <nav>
               <NavLink  to="/home/search" exact>
                   <i className="iconfont icon-eliaomo1"></i>
                   <span>外卖</span>
               </NavLink>

               <NavLink to="/discover">
                   <i className="iconfont icon-faxian"></i>
                   <span>发现</span>
               </NavLink>
               <NavLink to="/order">
                   <i className="iconfont icon-icon-"></i>
                   <span>订单</span>
               </NavLink>
               <NavLink to="/profile">
                   <i className="iconfont icon-wode"></i>
                   <span>我的</span>
               </NavLink>
           </nav>
        )
    }
}

export default Tab;