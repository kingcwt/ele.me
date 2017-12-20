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
    }
}

export default actions;