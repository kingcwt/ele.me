import * as types from '../action-types';

let initState = {
    searchInfoList:{
        loading:false,
        list:[]
    },
    searchWord:''
}
export  default  function (state = initState,action) {
    switch (action.type){
        case types.AJAX_SEARCH:
        return {
            ...state,
            searchInfoList:{
            loading: false,
            list: action.Date
            }
        }
        case types.SEARCH_HOT_CLICK:
            return{
                ...state,
                searchWord:action.val
            }
        case types.SORT_SEARCH:
            return {
                ...state,
                searchInfoList: {
                    loading: false,
                    list: action.Date
                }
            }
        default :
            return state;
    }
}