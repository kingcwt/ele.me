import {ajax} from './index';
import hostname from './hostname';

export function searchRestaurant(state) {
  return ajax({
    method: 'GET',
    url: hostname + `/search?keyword=${state}`,
    //data : {keyword:this.state.valuse},
  })
}

export function searchHotwords() {
  return ajax({
    method: 'GET',
    url: hostname + `/hotwords`
  })
}