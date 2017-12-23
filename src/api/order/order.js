import {ajax} from '../index';
import hostname from '../hostname';

export function orderList(userid, offset) {
  return ajax({
    method: 'GET',
    url: hostname + `/orderlist?userid=${userid}&offset=${offset}`,
  })
}

export function order(id) {
  return ajax({
    method: 'GET',
    url: hostname + `/order?id=${id}`,
  })
}