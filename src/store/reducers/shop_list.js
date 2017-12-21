/**
 * Created by hayashisakaikyou on 2017/12/19.
 */
import * as types from '../action-types';

let initState = {
  list:{
    shop:[]
  }
};

export default function (state = initState,action) {
  switch (action.type){
    //获取商铺信息
    case types.FETCH_SHOP_LIST:
      return{
        ...state,
        list:{
          shop:action.payload.restaurants,
        }
      };
    default:
      return state;
  }
}