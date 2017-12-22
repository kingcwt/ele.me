import * as types from '../action-types';
import {searchRestaurant} from '../../api/search';

let actions={
    ajaxSearch(state){
        return function (dispatch,getState) {
/*            dispatch({
                type:types.AJAX_SEARCH,
                Date:searchRestaurant(state)

            })*/
            searchRestaurant(state).then(res=> dispatch({
                type:types.AJAX_SEARCH,
                Date:res
            }))
        }
    },
    wordClicSearch(val){
        return {
            type:types.SEARCH_HOT_CLICK,
            val
        }
    },
    sortSearch(state){
        return{
            type:types.SORT_SEARCH,
            Date:state
        }
    }
}

export default actions;