import React,{Component} from 'react';
import  './index.less'
export default class SearchListHeaderFilterScreen extends Component{
    render(){
        return (
            <div className='Type-bg'>
                <ul  className="screenType">
                    <li>
                        <h5>配送方式</h5>
                        <span><i></i>蜂鸟配送</span>
                    </li>
                    <li>
                        <h5>人均消费</h5>
                        <ul>
                            <li>￥20元以下</li>
                            <li>￥20~40</li>
                            <li>￥40元以下</li>
                        </ul>
                    </li>
                    <li>
                        <h5>优惠活动</h5>
                        <ul>
                            <li>新用户优惠</li>
                            <li>特价商品</li>
                            <li>下单立减</li>
                            <li>赠品优惠</li>
                            <li>下单返红包</li>
                            <li>进店领红包</li>
                        </ul>
                    </li>
                    <li>
                        <h5>商家属性(可多选)</h5>
                        <ul>
                            <li>品牌商家</li>
                            <li>外卖保</li>
                            <li>新店</li>
                            <li>开发票</li>
                            <li>在线支付</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}