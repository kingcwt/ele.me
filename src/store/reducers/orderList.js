import * as types from '../action-types';
let initState={
    orderlist:{
        Data:[]
    }
};
export default function (state=initState,action) {
    switch (action.type){
        case types.ORDER_LISTS:
            return {
                ...state,
                orderlist:{
                    Data:action.Data
                }
            };
        default :
            return state;
    }
}