import * as types from '../action-types';
import {getAdd,getWeather} from '../../api/home_header';

let actions={
  fetchAdd(){
    return function (dispatch,getState) {
      let data = getAdd();
      dispatch({
        type:types.FETCH_ADD,
        payload:data
      })
    }
  },
  fetchWeather(){
    return function (dispatch,getState) {
      let data = getWeather();
      dispatch({
        type:types.FETCH_WEATHER,
        payload:data
      })
    }
}
};
export default actions;