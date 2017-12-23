import React, {Component} from 'react';
import './detail.less';
import DetailHeader from "./detailHeader/detailHeader";
import DetailRouter from "./detailRouter/detailRouter";
import {HashRouter as Router, Route} from 'react-router-dom';
import DetailShop from "./detailShop/detailShop";
import DetailProduct from "./detailProduct/detailProduct";
import DetailComment from "./detailComment/detailComment";


export default class Detail extends Component {
  componentDidMount() {
    if(this.props.location.state&&this.props.location.state.id){
      localStorage.setItem('restaurantId', JSON.stringify(this.props.location.state.id));
    }
  }

  render() {
    let restaurantId = null;
    if (this.props.location.state && this.props.location.state.id) {
      restaurantId = this.props.location.state.id;
    } else {
      restaurantId = localStorage.getItem('restaurantId');
    }
    return (
      <div className='_detail'>
        <header className='detail-title'>
          <i onClick={() => this.props.history.goBack()} className='iconfont icon-fanhui'></i>
          <i className='iconfont icon-gouwuche'></i>
        </header>
        <DetailHeader {...this.props}/>
        <DetailRouter {...this.props}/>
        <Router>
          <div>
            <Route exact path='/detail/:id' component={DetailProduct}/>
            <Route path={`/detail/:id/comment`} component={DetailComment}/>
            <Route path='/detail/:id/shop' component={DetailShop}/>
          </div>
        </Router>
      </div>
    )
  }
}

