import React, {Component} from 'react';
import './detailKart.less';
import {connect} from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import actions from '../../../store/actions/detail';
import PlusMinus from "../plusMinus/plusMinus";
import {Link} from 'react-router-dom';

class DetailKart extends Component {
  constructor() {
    super();
    this.state = {
      showCart: false
    }
  }

  clearAll = () => {
    this.props.clearAllFood();
    this.setState({showCart: false});
  };

  addCartCount = (cart_id) => {
    this.props.addCartCnt(cart_id)
  };

  minusCartCount = (cart_id) => {
    this.props.minusCartCnt(cart_id)
  };

  clearCount(){
    this.props.clearAllCount();
  }

  render() {
    let price = this.props.cartList.reduce((prev, next) => {
      if (next.specfoods) {
        if (!next.food_count) {
          next.food_count = 0;
        }
        let price = prev + (next.specfoods[0].price * next.food_count);
        return parseFloat(price.toFixed(2));
      }
    }, 0);
    let activity = this.props.shopInfo.shop.activities ? this.props.shopInfo.shop.activities.find(item => {
      return item.type === 102
    }) : '';
    if (activity) {
      var {description} = activity;
    }
    let cartInfo = {
      cartList: this.props.cartList,
      name: this.props.detail?this.props.detail.shopInfo.shop.name:'',
      deliver_fee: this.props.shopInfo.shop.float_delivery_fee
    };
    return (
      <div className='detail-kart'>
        <div className='kart-position'>
          <div className={"kart-list " + (this.props.count > 0 ? (this.state.showCart ? 'show-cart' : '') : '')}>
            <div className="kart-list-title">
              <span>{description}</span>
            </div>
            <div className="kart-list-explain">
              <span>已选商品</span>
              <p onClick={this.clearAll}>
                <i className='iconfont icon-lajixiang'></i>
                <span>清空</span>
              </p>
            </div>
            <div className="kart-list-body">
              <ul>
                {
                  this.props.cartList ?
                    this.props.cartList.map((item, index) => {
                      if (item.food_count > 0) {
                        return (
                          <li key={index}>
                            <p>{item.name}</p>
                            <div className="list-right">
                              <div className="item-price">
                                <span>￥</span>
                                <span>{item.specfoods ? (item.specfoods[0].price * item.food_count).toFixed(2) : ''}</span>
                              </div>
                              <div className='product-count'>
                                <a onClick={() => this.minusCartCount(item.virtual_food_id)}
                                   className='price-minus'>一</a>
                                <span>{item.food_count}</span>
                                <a onClick={() => this.addCartCount(item.virtual_food_id)} className='price-plus'>+</a>
                              </div>
                            </div>
                          </li>
                        )
                      }
                      return null;
                    }) : null
                }
              </ul>
            </div>
          </div>
          <div className="kart-nav">
            <span
              onClick={() => this.setState({showCart: !this.state.showCart})}
              className={"kart-car " + (this.props.count > 0 ? 'change-color ' : ' ')}
            >
              <i className='iconfont icon-gwc'></i>
              <span className={'food-count-all ' + (this.props.count > 0 ? '' : 'dn')}>{this.props.count}</span>
            </span>
            <div className="count-price">
              <span>￥{price}</span>
              <span>配送费￥{this.props.shopInfo.shop.float_delivery_fee}</span>
            </div>
            <div
              className={'kart-settle ' + (this.props.shopInfo.shop.float_minimum_order_amount - price <= 0 ? 'go-to-settle' : '')}>
              {
                this.props.count > 0 ?
                  (
                    this.props.shopInfo.shop.float_minimum_order_amount - price > 0 ?
                      <span>还差￥{(this.props.shopInfo.shop.float_minimum_order_amount - price).toFixed(2)}起送</span> :
                      <Link to={{pathname: '/firmorder', state: {cartInfo, price}}}><span onClick={()=>this.clearCount()}>去结算</span></Link>
                  ) :
                  <span>￥{this.props.shopInfo.shop.float_minimum_order_amount}起送</span>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state.detail, actions)(DetailKart);