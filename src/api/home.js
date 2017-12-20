/**
 * Created by hayashisakaikyou on 2017/12/20.
 */
import {ajax} from './index';

//获取地址
export function getAdd() {
  return ajax({
    method:"GET",
    url:'http://localhost:3000/location'
  }).then(res=>res);
}