/**
 * Created by hayashisakaikyou on 2017/12/19.
 */
import * as types from '../action-types';

let initState = {
  add:{}
};

export default function (state = initState,action) {
  switch (action.type){
    case types.FETCH_ADD:
      return{
        ...state,
        add:action.payload
      };
    default:
      return state;
  }
}