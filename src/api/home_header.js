/**
 * Created by hayashisakaikyou on 2017/12/20.
 */
import {ajax} from './index';
import hostname from './hostname';

//获取地址
export function getAdd() {
  return ajax({
    method: "GET",
    url: hostname + '/location'
  }).then(res => res);
}

//获取天气
export function getWeather() {
  return ajax({
    method: "GET",
    url: hostname + '/weather'
  }).then(res => res);
}
