import React,{Component} from 'react';
import Header from '../../../components/Header';
import './index.less'
export default class NoOrder extends Component{
    render(){
        return (
            <div className='__main'>
                <Header title='订单'/>
                <div className='CContainer'>
                    <img src="//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif" alt=""/>
                    <p>近三个月无外卖订单记录</p>
                </div>
            </div>
        )
    }
}