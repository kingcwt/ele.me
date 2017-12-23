/**
 * Created by hayashisakaikyou on 2017/12/20.
 */
import {ajax} from './index';
import hostname from './hostname';

//获取店铺信息
export function getShop(offset) {
  return ajax({
    method: "GET",
    url: hostname + '/restaurants'
  }).then(res => res)
}