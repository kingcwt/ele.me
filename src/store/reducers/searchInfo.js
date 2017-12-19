import * as types from '../action-types';

let initState = {
    searchInfoList:[]
}
export  default  function (state = initState,action) {
    switch (action.type){
        case types.AJAX_SEARCH:
        return {
            ...state,
            searchInfo:{
            loading: false,
            list: action.Date
            }
        }
    }
}