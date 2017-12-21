import * as types from '../action-types';
import {getHot} from '../../api/hot_words';

let actions={
  fetchHot(){
    return function (dispatch,getState) {
      let data = getHot();
      dispatch({
        type:types.FETCH_HOT_WORDS,
        payload:data
      })
    }
  }
};
export default actions;