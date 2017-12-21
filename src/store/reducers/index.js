import {combineReducers} from 'redux';
import home_header from './home_header';
import hot_words from './hot_words';
import shop_list from './shop_list';
import {routerReducer} from 'react-router-redux';
import detail from './detail';

import orderList from './orderList';
import searchInfo from './searchInfo'

let reducers = combineReducers({
  searchInfo,
  //添加了这个之后,大家可以在actions中按需使用dispatch(push('/xxx')) 跳转到某个路由
  home_header,
  hot_words,
  shop_list,
  orderList,
  router: routerReducer,
  //别忘了在这里添加你的reducer  合并成唯一的状态树
  detail
});

export default reducers;