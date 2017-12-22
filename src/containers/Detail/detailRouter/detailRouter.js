import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './detailRouter.less';

export default class DetailRouter extends Component {
  constructor() {
    super();
    this.state = {
      flag: false
    }
  }

  componentDidMount(){

  }

  render() {
    this.id = null;
    if (this.props.location.state && this.props.location.state.id) {
      this.id = this.props.location.state.id;
    } else {
      this.id = localStorage.getItem('restaurantId');
    }
    return (
      <div className={'detail-router ' + (this.state.flag ? 'fixed' : '')}>
        <NavLink exact to={{pathname:`/detail/${this.id}`}}><span>商品</span></NavLink>
        <NavLink to={`/detail/${this.id}/comment`}><span>评价</span></NavLink>
        <NavLink to={`/detail/${this.id}/shop`}><span>店铺</span></NavLink>
      </div>
    )
  }
}