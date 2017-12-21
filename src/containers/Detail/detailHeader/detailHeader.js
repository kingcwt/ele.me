import React, {Component} from 'react';
import './detailHeader.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/detail';

class DetailHeader extends Component {
  componentDidMount() {
    this.props.fetchShopInfo(152106988);
  }

  render() {
    let shopInfo = this.props.shopInfo.shop;
    return (
      <div className='detail-header'>
        <div className='detail-header-top'>
          <img
            src="https://fuss10.elemecdn.com/1/d0/fc1b528693b64b3a6da77f4718554png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
            alt=""/>
          <div className="detail-header-content">
            <h2>{shopInfo.name} </h2>
            <span>蜂鸟专送</span> /&nbsp;
            <span>{shopInfo.order_lead_time}分钟到达</span> /&nbsp;
            <span>配送费￥{shopInfo.float_delivery_fee}</span>&nbsp;
            <p>{shopInfo.promotion_info}</p>
          </div>
        </div>
        <div className="detail-header-bot">
          <p>
            <span>{shopInfo.activities.length>0? shopInfo.activities[0].icon_name:''}</span>
            {shopInfo.activities.length>0?shopInfo.activities[0].description:''}
          </p>
          <p>{shopInfo.activities.length}个活动</p>
        </div>
      </div>
    )
  }
}

export default connect(state => state.detail, actions)(DetailHeader);