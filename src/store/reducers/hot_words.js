/**
 * Created by hayashisakaikyou on 2017/12/19.
 */
import * as types from '../action-types';

let initState = {
  words:[]
};

export default function (state = initState,action) {
  switch (action.type){
    case types.FETCH_HOT_WORDS:
      return{
        ...state,
        words:action.payload
      };
    default:
      return state;
  }
}