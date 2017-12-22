import React, {Component} from 'react';
import './detailShop.less';
import {connect} from 'react-redux';
import actions from '../../../store/actions/detail';

class DetailShop extends Component {
  componentDidMount() {
    let id = null;
    if (this.props.location.state && this.props.location.state.id) {
      id = this.props.location.state.id;
      this.props.fetchShopInfo(id);
    } else {
      id = localStorage.getItem('restaurantId');
      this.props.fetchShopInfo(id);
    }
  }

  render() {
    let shopInfo = this.props.shopInfo.shop;
    return (
      <div className='detail-shop'>
        <div className="detail-deliver">
          <h4>配送信息</h4>
          <div>
            <span className='hummer'>蜂鸟专送</span>
            <span>约{shopInfo.order_lead_time}分钟送达,距离{(shopInfo.distance / 1000).toFixed(1)}千米</span>
          </div>
          <span>配送费￥{shopInfo.float_delivery_fee}</span>
        </div>
        <div className="detail-activity">
          <h4>活动与服务</h4>
          <ul>
            {
              shopInfo.activities.map((item, index) => {
                return <li key={index}>
                  <span className='activity' style={{backgroundColor: `#${item.icon_color}`}}>{item.icon_name}</span>
                  <span>{item.description}</span>
                </li>
              })
            }
          </ul>
        </div>
        <div className="detail-live">
          <h4>商家实景</h4>
          <img
            src="https://fuss10.elemecdn.com/1/15/3421c940c5fbbf217a20b04594815jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/"
            alt=""/>
          <img
            src="https://fuss10.elemecdn.com/4/87/07578e87cdb9c1f1277063f26c552jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/"
            alt=""/>
        </div>
        <div className="detail-company">
          <h4>商家信息</h4>
          <ul>
            <li className="detail-notice">暂无简介</li>
            <li className="detail-tel">
              <span>商家电话</span>
              <span>{shopInfo.phone}</span>
            </li>
            <li className="detail-address">
              <span>地址</span>
              <span>{shopInfo.address}</span>
            </li>
            <li className="detail-shopHour">
              <span>营业时间</span>
              <span>{shopInfo.opening_hours}</span>
            </li>
          </ul>
        </div>
        <div className="detail-aptitude">
          <h4>营业资质</h4>
        </div>
      </div>
    )
  }
}

export default connect(state => state.detail, actions)(DetailShop);