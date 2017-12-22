import React,{Component} from 'react';
import './index.less'
import actions from '../../../store/actions/orderList';
import {connect} from 'react-redux';
import Header from "../../../components/Header/index";
import {orderList} from '../../../api/order/order'
 class HistoryOrder extends Component{
    constructor(){
        super();
        this.state={
            list:{
                hasMore:true,
                orderList:[]
            }
        };
    }
    componentDidMount(){
        orderList(1,1).then(res=>{
            this.setState({
                list:res
            },function () {
                console.log(this.state);
            })
        })
    }
    render(){
        console.log(this.state.list);
        return (
            <div>
              <Header title='订单'/>
                <p className='__p'></p>
                <section className='_section'>

{/*                    {this.state.map(item,index=>(
                        <ul className='_section_ul1'>
                            <li className='_section_ul1_li1'><img src={item.restaurant_image_hash} alt=""/></li>
                            <li className='_section_ul1_li2'>十五言（会龙店）</li>
                            <li className='_section_ul1_li3'>订单完成</li>
                            <li className='_section_ul1_li4'></li>
                        </ul>
                    ))}*/}
                    {this.state.list.orderList.map((item,index)=>(
                        <div key={index}>
                            <ul className='_section_ul1'

                            >
                                <li className='_section_ul1_li1'><img src={item.restaurant_image_hash} alt=""/></li>
                                <li className='_section_ul1_li2'>{item.restaurant_name}</li>
                                <li className='_section_ul1_li3'>{item.status_bar.title}</li>
                                <li className='_section_ul1_li4'>{item.deliver_fee}</li>
                            </ul>
                            <ul className='_section_ul2'>
                                <li className='_section_ul2_li1'>{item.formatted_created_at}</li>
                                <li className='_section_ul2_li2'>￥{item.total_amount}</li>
                                <li className='_section_ul2_li3'></li>
                            </ul>
                            <ul className='_section_ul3'>
                                <li className='_section_ul2_li1'>还有{item.basket.group[0][0].name}...等{item.basket.group[0].length}件商品</li>
                                <li className='_section_ul2_li2'>{item.timeline_node.description}</li>
                                <li className='_section_ul2_li3'></li>
                            </ul>
                        </div>
                        ))}

                </section>
            </div>
        )
    }
}
export default connect(state=>({...state}),actions)(HistoryOrder)