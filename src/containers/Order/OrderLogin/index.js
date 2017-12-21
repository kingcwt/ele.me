import React,{Component} from 'react';
import Header from '../../../components/Header';
import './index.less'
export default class OrderLogin extends Component{
    render(){
        return (
            <div className='__main'>
                <Header title='订单'/>
                <div className='CContainer'>
                    <img src="//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif" alt=""/>
                    <p>登录后查看外卖订单</p>
                    <button>立即登录</button>
                </div>
            </div>
        )
    }
}