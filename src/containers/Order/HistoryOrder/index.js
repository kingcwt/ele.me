import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import actions from '../../../store/actions/orderList';
import {connect} from 'react-redux';
import Header from "../../../components/Header/index";
import {orderList} from '../../../api/order/order'
export default class HistoryOrder extends Component{
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
          { this.state.list.orderList.length>0?this.state.list.orderList.map((item,index)=>(
            <div key={index}>
              <ul className='_section_ul1'

              >
                <li className='_section_ul1_li1'><img src={item.restaurant_image_hash} alt=""/></li>
                <li className='_section_ul1_li2'>{item.restaurant_name}</li>
                <li className='_section_ul1_li3'>{item.status_bar.title}</li>
                <span className='__span'>{item.formatted_created_at}</span>
                <li className='_section_ul1_li4'>{item.deliver_fee}</li>
              </ul>
              <ul className='_section_ul2'>
                <li className='_section_ul2_li1'>￥{item.total_amount}</li>
                <li className='_section_ul2_li2'>还有{item.basket.group[0][0].name}...等{item.basket.group[0].length}件商品</li>
                <li className='_section_ul2_li3'></li>
              </ul>
              <ul className='_section_ul3'>
                <li className='_section_ul2_li1'>评价得10金币</li>
                <li className='_section_ul2_li2'>再来一单</li>
                <i className='_section_ul2_li3'></i>
              </ul>
            </div>
          )):<Link to='/orderlogin'/>
          }

        </section>


      </div>
    )
  }
}