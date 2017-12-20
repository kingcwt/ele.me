import * as types from '../action-types';
import {getAdd} from '../../api/home';

let actions={
  fetchAdd(){
    return function (dispatch,getState) {
      let data = getAdd();
      dispatch({
        type:types.FETCH_ADD,
        payload:data
      })
    }
  }
};
export default actions;