import * as types from '../action-types';
import {searchRestaurant} from '../../api/search';

let actions={
    ajaxSearch(state){
        return function (dispatch,getState) {
            dispatch({
                type:types.AJAX_SEARCH,
                Date:searchRestaurant(state)

            })
        }
    }
}

export default actions;