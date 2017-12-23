import * as types from '../action-types';

let initState = {
  shopInfo: {
    shop: {
      activities: []
    }
  },
  rating: {
    rate: {}
  },
  tags: {
    tag: []
  },
  judgeList: [],
  detailMenu: {
    menu: []
  },
  typeId: -1,
  count: 0,
  loading: false,
  cartList: []
};
export default function (state = initState, action) {
  let {detailMenu: {menu}, count, cartList} = state;
  let {menu_id, food_id, cart_id} = action;
  let foods_arr = menu.find(item => item.id === menu_id);
  if(cart_id){
    var cartFood = cartList.find(item => {
      if(item.virtual_food_id){
        return item.virtual_food_id === cart_id
      }
    });
  }
  if (foods_arr) {
    let {foods} = foods_arr;
    var food = foods.find(item => item.virtual_food_id === food_id);
    food.food_count = food.food_count ? food.food_count : 0;
    if(cartFood){
      if (cartFood.virtual_food_id === food.virtual_food_id) {
        food.food_count = cartFood.food_count;
      }
    }
  }
  switch (action.type) {
    case types.GET_SHOP_INFO:
      return {
        ...state,
        loading: true,
        shopInfo: {
          ...state.shopInfo,
        }
      };
    case types.GET_SHOP_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        shopInfo: {
          ...state.shopInfo,
          shop: action.payload
        }
      };
    case types.GET_RATING:
      return {
        ...state,
        loading: true,
        rating: {
          ...state.rating,
        }
      };
    case types.GET_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        rating: {
          ...state.rating,
          rate: action.payload
        }
      };
    case types.GET_RATING_TAGS:
      return {
        ...state,
        tags: {
          ...state.tags,
          tag: action.payload
        }
      };
    case types.GET_JUDGE_LIST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_JUDGE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        judgeList: [...state.judgeList, ...action.payload]
      };
    case types.GET_DETAIL_MENU:
      return {
        ...state,
        loading: true
      };
    case types.GET_DETAIL_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        detailMenu: {
          ...state.detailMenu,
          menu: action.payload
        }
      };
    case types.ADD_FOOD_COUNT:
      ++food.food_count;
      count += 1;
      if (cartList.indexOf(food) === -1) {
        cartList.push(food);
      }
      return {
        ...state,
        detailMenu: {
          ...state.detailMenu,
          menu
        },
        count,
        cartList
      };
    case types.MINUS_FOOD_COUNT:
      --food.food_count;
      count -= 1;
      if (food.food_count === 0) {
        cartList = cartList.filter(item => {
          return item.food_count !== 0
        });
      }
      return {
        ...state,
        detailMenu: {
          ...state.detailMenu,
          menu
        },
        count,
        cartList
      };
    case types.CLEAR_ALL_FOOD:
      cartList.forEach(item => {
        item.food_count = 0;
      });
      return {
        ...state,
        count: 0,
        cartList: []
      };
    case types.ADD_CART_CNT:
      ++cartFood.food_count;
      count += 1;
      return {
        ...state,
        detailMenu:{
          ...state.detailMenu,
          menu
        },
        count,
        cartList
      };
    case types.MINUS_CART_CNT:
      --cartFood.food_count;
      count -= 1;
      return {
        ...state,
        detailMenu:{
          ...state.detailMenu,
          menu
        },
        count,
        cartList
      };
    case types.CLEAR_ALL_COUNT:
      return {
        ...state,
        count:0,
        cartList:[]
      };
    default:
      return state;
  }
}