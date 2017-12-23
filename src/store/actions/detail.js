import * as types from '../action-types';
import {getShopInfo, getRating, getTags, getJudgeList, getDetailMenu} from '../../api/detail';

let actions = {
  //获取店铺详情页相关信息
  fetchShopInfo(id) {
    return function (dispatch, getState) {
      dispatch({
        type: types.GET_SHOP_INFO
      });
      let data = getShopInfo(id);
      dispatch({
        type: types.GET_SHOP_INFO_SUCCESS,
        payload: data
      })
    }
  },
  //获取店铺评分
  fetchRating(id) {
    return function (dispatch, getState) {
      dispatch({
        type: types.GET_RATING
      });
      let data = getRating(id);
      dispatch({
        type: types.GET_RATING_SUCCESS,
        payload: data
      })
    }
  },
  //获取店铺评价页标签
  fetchTags(id) {
    return function (dispatch, getState) {
      let data = getTags(id);
      dispatch({
        type: types.GET_RATING_TAGS,
        payload: data
      })
    }
  },
  //获取店铺评价列表
  fetchJudgeList(id, offset) {
    return function (dispatch, getState) {
      dispatch({
        type: types.GET_JUDGE_LIST
      });
      let data = getJudgeList(id, offset);
      dispatch({
        type: types.GET_JUDGE_LIST_SUCCESS,
        payload: data
      })
    }
  },
  fetchDetailMenu(id) {
    return function (dispatch, getState) {
      dispatch({
        type: types.GET_DETAIL_MENU
      });
      let data = getDetailMenu(id);
      dispatch({
        type: types.GET_DETAIL_MENU_SUCCESS,
        payload: data
      })
    }
  },
  addFoodCount(menu_id,food_id) {
    return {
      type: types.ADD_FOOD_COUNT,
      menu_id,
      food_id
    }
  },
  minusFoodCount(menu_id,food_id) {
    return {
      type: types.MINUS_FOOD_COUNT,
      menu_id,
      food_id
    }
  },
  clearAllFood(){
    return {
      type:types.CLEAR_ALL_FOOD
    }
  },
  addCartCnt(cart_id){
    return {
      type:types.ADD_CART_CNT,
      cart_id
    }
  },
  minusCartCnt(cart_id){
    return {
      type:types.MINUS_CART_CNT,
      cart_id
    }
  },
  clearAllCount(){
    return {
      type:types.CLEAR_ALL_COUNT
    }
  }
};
export default actions;