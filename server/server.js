let express = require('express');
let request = require('request');
let url = require('url');
let app = express();
app.listen(3000, () => {
  console.log('3000 ok');
});

//首页
app.get('/restaurants', (req, res) => {
  let offset = parseInt(req.query.offset);
  //商店列表  参数 offset
  request(`https://restapi.ele.me/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=${offset}&limit=5&extras[]=activities&extras[]=tags&extra_filters=home&terminal=h5`, function (error, response, data) {
    res.send(data);
  })
});
app.get('/hotwords', (req, res) => {
  //热搜关键词 无参
  request('https://restapi.ele.me/shopping/v3/hot_search_words?latitude=39.90469&longitude=116.407173', function (error, response, data) {
    res.send(data);
  })
});
app.get('/weather', (req, res) => {
  //天气
  request('https://restapi.ele.me/bgs/weather/current?latitude=40.08253&longitude=116.35393', function (error, response, data) {
    res.send(data);
  })
});
app.get('/location', (req, res) => {
  //定位地址
  request('https://restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=39.90469&longitude=116.407173', function (error, response, data) {
    res.send(data);
  })
});


//详情页菜单
app.get('/menu', (req, res) => {
  //菜单及描述  参数  id
  let restaurant_id = req.query.id;
  request(`https://restapi.ele.me/shopping/v2/menu?restaurant_id=${restaurant_id }`, function (error, response, data) {
    res.send(data);
  })
});
app.get('/shopinfo', (req, res) => {
  //店铺信息
  let restaurant_id = req.query.id;
  request(`https://restapi.ele.me/shopping/restaurant/${restaurant_id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=39.90469&longitude=116.407173`, (error, response, data) => {
    res.send(data);
  })
});
app.get('/rating', (req, res) => {
  //店铺评价页平均分
  let restaurant_id = req.query.id;
  request(`https://restapi.ele.me/ugc/v2/restaurants/${restaurant_id}/ratings/scores`, (error, response, data) => {
    res.send(data);
  })
});
app.get('/judgelist', (req, res) => {
  //详细评价
  //参数 店铺id   偏移量offset
  let restaurant_id = req.query.id;
  let offset = req.query.offset;
  request(`https://restapi.ele.me/ugc/v3/restaurants/${restaurant_id}/ratings?has_content=true&offset=${offset}&limit=10`, (error, response, data) => {
    res.send(data);
  })
});


//分类页
app.get('/specify', (req, res) => {
  //分类页数据
  request(`https://restapi.ele.me/shopping/restaurants?latitude=39.90469&longitude=116.407173&keyword=&offset=0&limit=20&extras[]=activities&extras[]=tags&terminal=h5&brand_ids[]=&restaurant_category_ids[]=`, (error, response, data) => {
    res.send(data);
  })
});

app.get('/orderlist',(req,res)=>{
  //订单列表页   自己写
  let userId=req.query.userId;
  request(`https://restapi.ele.me/bos/v2/users/${id}/orders?limit=10&offset=0`);
});

app.get('/order',(req,res)=>{
  //订单详情 参数 订单id   自己写
  let orderId=req.query.orderid;
  request(`https://restapi.ele.me/bos/v1/users/42955013/orders/${orderId}/snapshot`);
});





