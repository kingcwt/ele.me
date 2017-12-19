import {ajax} from './index';

export function searchRestaurant(state) {
    return ajax({
        method : 'GET',
        url : `http://localhost:3000/search?keyword=${state}`,
        //data : {keyword:this.state.valuse},
    })
}