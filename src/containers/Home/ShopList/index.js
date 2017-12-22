import React, {Component} from 'react'
import './index.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/shop_list';
import Active from './Active/index';
import {Link} from 'react-router-dom';

class ShopList extends Component {
  componentDidMount() {
    this.props.fetchShop();
  }

  render() {

    return (
      <div className='_shopList'>
        {
          this.props.list.shop.map((item, index) => {
            return (
              <Link key={index} to={{pathname:`/detail/${item.id}` ,state:{id:item.id}}}>
                <div className='listItem'>
                  <div className='shopImg'>
                    <div className='shopLogo'>
                      <img src={item.image_path}/>
                    </div>
                    <div className="new"><span>新店</span></div>
                  </div>
                  <div className='main'>
                    <div className="showLine">
                      <h3>
                        <span>{item.name}</span>
                      </h3>
                      <ul className='supportWrap'>
                        {
                          item.supports.map((value, index) => {
                            return (
                              <li key={index}>{value.icon_name}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                    <div className="showLine showLine2">
                      <div className='rateWrap'>
                        <div>
                          <div className='star' style={{width: `${100 * item.rating / 5}%`}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 10" width="100%" height="100%">
                              <path fill="#FFCC01" fillRule="evenodd"
                                    d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z"></path>
                            </svg>
                          </div>
                        </div>
                        <span className='num'>{(item.rating).toFixed(1)}</span>
                        <span className='num'>月售{item.recent_order_num}单</span>
                      </div>
                      {item.delivery_mode ? <div className='deliver'>
                        <span>蜂鸟专送</span>
                      </div> : null}
                    </div>

                    <div className="showLine showLine2">
                      <div className='money'>
                        <span>¥{item.float_minimum_order_amount}起送</span>
                        <span>配送费¥{item.float_delivery_fee}</span>
                      </div>
                      <div className='time'>
                        <span>{(item.distance / 1000).toFixed(1)}km</span>
                        <span>{item.order_lead_time}分钟</span>
                      </div>
                    </div>
                    <div className="good">
                      <span>
                        <img
                          src="//fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/"
                          className="good_logo"/>
                        <span className="good_shop">口碑人气好店</span>
                      </span>
                    </div>
                    <div className='line'></div>
                    <div className="show_active">
                      <Active data={item.activities}/>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

export default connect(state => state.shop_list, actions)(ShopList);