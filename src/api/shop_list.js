/**
 * Created by hayashisakaikyou on 2017/12/20.
 */
import {ajax} from './index';

//获取店铺信息
export function getShop(offset) {
  return ajax({
    method:"GET",
    url:'http://localhost:3000/restaurants'
  }).then(res=>res)
}