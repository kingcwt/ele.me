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

  componentDidMount() {
    this.router.addEventListener('scroll', (e) => {
      let scrollT = this.router.scrollTop;
      let offsetT = this.router.offsetTop;
      if (offsetT===0) {
        this.setState({flag: true});
      }
    })
  }

  render() {
    return (
      <div ref={input => this.router = input} className={'detail-router ' + (this.state.flag ? 'fixed' : '')}>
        <NavLink exact to='/detail'><span>商品</span></NavLink>
        <NavLink to='/detail/comment'><span>评价</span></NavLink>
        <NavLink to='/detail/shop'><span>店铺</span></NavLink>
      </div>
    )
  }
}