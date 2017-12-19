import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import  searchInfo from './searchInfo'
let reducers = combineReducers({
    searchInfo,
  //添加了这个之后,大家可以在actions中按需使用dispatch(push('/xxx')) 跳转到某个路由
  router: routerReducer,
  //别忘了在这里添加你的reducer  合并成唯一的状态树

});

export default reducers;