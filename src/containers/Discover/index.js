import React,{Component} from 'react';
import './index.less'
import Header from '../../components/Header'
export default class Order extends Component{
    render(){
        return (
            <div>
                <Header title="发现"/>
                <div className='scroll'>
                    <img src={require('./1.jpg')} alt=""/>
                </div>

            </div>
        )
    }
}