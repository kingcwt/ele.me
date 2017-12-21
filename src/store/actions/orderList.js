import * as types from '../action-types';
import {orderList} from '../../api/order/order';
let actions={
  orderLists(userid,offset){
      return function (dispatch,getState) {
          orderList(userid,offset).then(result=>dispatch({
              type:types.ORDER_LISTS,
              Data:result
          }))
      }
  }
};
export default actions;