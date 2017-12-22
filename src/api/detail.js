import {ajax} from './index';

let URL = 'http://localhost:3000';

//获取店铺详情页相关数据
export function getShopInfo(id) {
  return ajax({
    method: 'GET',
    url: URL + `/shopinfo?id=${id}`,
  }).then(res => res);
}

//获取店铺评分
export function getRating(id) {
  return ajax({
    method: 'get',
    url: URL + `/rating?id=${id}`
  }).then(res => res);
}

//获取店铺评价页标签
export function getTags(id) {
  return ajax({
    method: 'get',
    url: URL + `/ratingtags?id=${id}`
  }).then(res => res);
}

//获取店铺评价列表
export function getJudgeList(id, offset) {
  return ajax({
    method: 'get',
    url: URL + `/judgelist?id=${id}&offset=${offset}`
  }).then(res => res);
}

export function getDetailMenu(id) {
  return ajax({
    method: 'get',
    url: URL + `/menu?id=${id}`
  }).then(res => res);
}



