import React, {Component} from 'react';
import './plusMinus.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/detail';

class PlusMinus extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      goods_item: {
        count: 0,

      }
    }
  }
  addCount(menu_id,food_id){
    this.props.addFoodCount(menu_id,food_id);
  }
  minusCount(menu_id,food_id){
    this.props.minusFoodCount(menu_id,food_id);
  }

  render() {
    let {item,food}=this.props;
    return (
      <div className='product-count'>
        <a onClick={()=>this.minusCount(item.id,food.virtual_food_id)} className={'price-minus ' + (food.food_count > 0 ? '' : 'dn')}>一</a>
        {
          food.food_count > 0 ? <span>{food.food_count}</span> : null
        }
        <a onClick={()=>this.addCount(item.id,food.virtual_food_id)} className='price-plus'>+</a>
      </div>
    )
  }
}

export default connect(state => state.detail, actions)(PlusMinus);