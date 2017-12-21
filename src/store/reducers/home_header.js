/**
 * Created by hayashisakaikyou on 2017/12/19.
 */
import * as types from '../action-types';

let initState = {
  add:{},
  weather:[]
};

export default function (state = initState,action) {
  switch (action.type){
    case types.FETCH_ADD:
      return{
        ...state,
        add:action.payload
      };
    case types.FETCH_WEATHER:
      return{
        ...state,
        weather:action.payload
      };
    default:
      return state;
  }
}