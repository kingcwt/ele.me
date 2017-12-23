import {ajax} from './index';
import hostname from './hostname';
let URL = 'http://localhost:3000';

//获取店铺详情页相关数据
export function getShopInfo(id) {
  return ajax({
    method: 'GET',
    url: hostname + `/shopinfo?id=${id}`,
  }).then(res => res);
}

//获取店铺评分
export function getRating(id) {
  return ajax({
    method: 'get',
    url: hostname + `/rating?id=${id}`
  }).then(res => res);
}

//获取店铺评价页标签
export function getTags(id) {
  return ajax({
    method: 'get',
    url: hostname + `/ratingtags?id=${id}`
  }).then(res => res);
}

//获取店铺评价列表
export function getJudgeList(id, offset) {
  return ajax({
    method: 'get',
    url: hostname + `/judgelist?id=${id}&offset=${offset}`
  }).then(res => res);
}

export function getDetailMenu(id) {
  return ajax({
    method: 'get',
    url: hostname + `/menu?id=${id}`
  }).then(res => res);
}



