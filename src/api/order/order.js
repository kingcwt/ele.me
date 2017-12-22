import {ajax} from '../index';
export function orderList(userid,offset) {
    return ajax({
        method:'GET',
        url:`http://localhost:3000/orderlist?userid=${userid}&offset=${offset}`,
    })
}
export function order(id) {
    return ajax({
        method:'GET',
        url:`http://localhost:3000/order?id=${id}`,
    })
}