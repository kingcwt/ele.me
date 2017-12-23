import React, {Component} from 'react';
import './detailProduct.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/detail';
import DetailKart from "../detailKart/detailKart";
import PlusMinus from "../plusMinus/plusMinus";

class DetailProduct extends Component {

  constructor() {
    super();
    this.state = {
      typeId: -1,
      count: 0,
    }
  }

  componentDidMount() {
    let id = null;
    if (this.props.location.state && this.props.location.state.id) {
      id = this.props.location.state.id;
      this.props.fetchDetailMenu(id);
    } else {
      id = localStorage.getItem('restaurantId');
      this.props.fetchDetailMenu(id);
    }
  }

  scrollToAnchor = (id) => {
    if (id) {
      let anchorElement = document.getElementById(id);
      if (anchorElement) {
        anchorElement.scrollIntoView({behavior: 'smooth', block: "start",inline:'center'});
      }
    }
  };

  setTypeId(id) {
    this.setState({typeId: id})
  }

  addCount(menu_id, food_id) {
    this.props.addFoodCount(menu_id, food_id);
  }

  minusCount(menu_id, food_id) {
    this.props.minusFoodCount(menu_id, food_id);
  }

  render() {
    let menu = this.props.detailMenu.menu;
    return (
      <div className='detail-product'>
        <div className="scroll-left">
          <ul>
            {menu.map((item, index) => {
              return (
                <li onClick={() => this.setTypeId(item.id)}
                    className={this.state.typeId === item.id ? 'active-product' : ''} key={index}>
                  <a onClick={() => this.scrollToAnchor(item.id)}>
                    <span>{item.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="scroll-right">
          <div className='ofa'>
            {
              menu.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='product-title' id={item.id}>
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                    </div>
                    <ul>
                      {
                        item.foods ? item.foods.map((food, indexFood) => {
                          return (
                            <li key={indexFood}>
                              <img
                                src="https://fuss10.elemecdn.com/e/55/e34a2715bd803a0016733dcdacdcdjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"
                                alt=""/>
                              <div className='product-item'>
                                <h4>{food.name}</h4>
                                <span>{food.description}</span>
                                <p>
                                  <span>月售{food.month_sales}份</span>
                                  <span>好评率{food.satisfy_rate}%</span>
                                </p>
                                <div className='product-price'>
                                  <p className='product-price-item'>
                                    <span>￥</span>
                                    <span>{food.specfoods ? food.specfoods[0].price : ''}</span>
                                  </p>
                                  <PlusMinus item={item} food={food}/>
                                </div>
                              </div>
                            </li>
                          )
                        }) : null
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
        <DetailKart/>
      </div>
    )
  }
}

export default connect(state => state.detail, actions)(DetailProduct);