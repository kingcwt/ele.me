import * as types from '../action-types';
import {getShop} from '../../api/shop_list';

let actions={
  fetchShop(offset){
    return function (dispatch,getState) {
      let data = getShop(offset);
      dispatch({
        type:types.FETCH_SHOP_LIST,
        payload:data
      })
    }
  }
};
export default actions;