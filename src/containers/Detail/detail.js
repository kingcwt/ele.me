import React, {Component} from 'react';
import './detail.less';
import DetailHeader from "./detailHeader/detailHeader";
import DetailRouter from "./detailRouter/detailRouter";
import {HashRouter as Router, Route} from 'react-router-dom';
import DetailShop from "./detailShop/detailShop";
import DetailProduct from "./detailProduct/detailProduct";
import DetailComment from "./detailComment/detailComment";


export default class Detail extends Component {
  render() {
    return (
      <div className='detail'>
        <header className='detail-title'>
          <i className='iconfont icon-fanhui'></i>
          <i className='iconfont icon-gouwuche'></i>
        </header>
        <DetailHeader/>
        <DetailRouter/>
        <Router>
          <div>
            <Route exact path='/detail' component={DetailProduct}/>
            <Route path='/detail/comment' component={DetailComment}/>
            <Route path='/detail/shop' component={DetailShop}/>
          </div>
        </Router>

      </div>
    )
  }
}

