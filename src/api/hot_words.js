/**
 * Created by hayashisakaikyou on 2017/12/20.
 */
import {ajax} from './index';
import hostname from './hostname';

//获取热搜词语
export function getHot() {
  return ajax({
    method: "GET",
    url: hostname + '/hotwords'
  }).then(res => res);
}
