/**
 * Created by hayashisakaikyou on 2017/12/20.
 */
import {ajax} from './index';

//获取热搜词语
export function getHot() {
  return ajax({
    method:"GET",
    url:'http://localhost:3000/hotwords'
  }).then(res=>res);
}
