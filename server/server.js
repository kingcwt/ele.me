let express = require('express');
let fs = require('fs');
let request = require('request');

//中间件
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let session = require('express-session');
//启动服务
let app = express();

//读,写
let read = (url, cb) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err || data.length === 0) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  })
};
let write = (url, data, cb) => {
  fs.writeFile(url, JSON.stringify(data,), cb);
};
//本地商家列表
let restaurants = require('./mock/restaurants');
let orderList = require('./mock/orderlist');

//中间件
app.use((req, res, next) => {
  //只允许8080端口跨域访问
  res.header('Access-Control-Allow-Origin', '*');
  //允许跨域请求的方法
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  //服务器允许的跨域请求头
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
  //允许客户端把cookie发过来
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    //如果请求的方法是options,那么意味着客户端只要响应头,直接结束相应即可
    res.end();
  } else {
    next();
  }
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'xgod',
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}));
//静态目录托管
app.use(express.static('build'));
app.use((req, res, next) => {
  //console.log(req.session);
  //console.log(req.body);
  //console.log(req.query);
  if (!req.session.users) {
    req.session.users = [];
  }
  next();
});


//首页相关--------------------------------------------------
let homePage = {
  //获取首页店铺信息
  restaurants: '/restaurants',
  //热搜关键词 无参
  hotWords: '/hotwords',
  //天气
  weather: '/weather',
  //定位地址
  location: '/location',
};
//获取首页店铺信息
app.get(homePage.restaurants, (req, res) => {
  let offset = parseInt(req.query.offset) || 0;
  offset = offset < 0 ? 0 : offset;
  let limit = 20;
  let hasMore = true;
  //商店列表  参数 offset
  let result = restaurants.slice(offset, offset + limit);
  if (restaurants.length <= offset + limit) {
    hasMore = false;
  }
  res.json({hasMore, restaurants: result});
});

//热搜关键词 无参
app.get(homePage.hotWords, (req, res) => {
  request('https://restapi.ele.me/shopping/v3/hot_search_words?latitude=39.90469&longitude=116.407173', function (error, response, data) {
    if (error) console.log(error);
    res.send(data);
  })
});

//天气
app.get(homePage.weather, (req, res) => {
  request('https://restapi.ele.me/bgs/weather/current?latitude=40.08253&longitude=116.35393', function (error, response, data) {
    if (error) console.log(error);
    res.send(data);
  })
});

//定位地址
app.get(homePage.location, (req, res) => {
  request('https://restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=39.90469&longitude=116.407173', function (error, response, data) {
    if (error) console.log(error);
    res.send(data);
  })
});

//店铺详情页相关---------------------------------------------
let detail = {
  //菜单及描述
  menu: '/menu',
  //店铺信息
  shopInfo: '/shopinfo',
  //店铺评价页得分
  rating: '/rating',
  //评价页评价分类标签
  ratingTags: '/ratingtags',
  //详细评价
  judgeList: '/judgelist',
};
//菜单及描述
app.get(detail.menu, (req, res) => {
  //参数  id  店铺id
  let restaurant_id = req.query.id;
  restaurant_id = parseInt(restaurant_id);
  if (!isNaN(restaurant_id)) {
    request(`https://restapi.ele.me/shopping/v2/menu?restaurant_id=${restaurant_id}`, function (error, response, data) {
      if (error) console.log(error);
      res.send(data);
    })
  }
});

//店铺信息
app.get(detail.shopInfo, (req, res) => {
  let restaurant_id = req.query.id;
  request(`https://restapi.ele.me/shopping/restaurant/${restaurant_id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=39.90469&longitude=116.407173`, (error, response, data) => {
    if (error) console.log(error);
    res.send(data);
  })
});

//店铺评价页得分
app.get(detail.rating, (req, res) => {
  let restaurant_id = req.query.id;
  request(`https://restapi.ele.me/ugc/v2/restaurants/${restaurant_id}/ratings/scores`, (error, response, data) => {
    if (error) console.log(error);
    res.send(data);
  })
});

//评价页评价分类标签
app.get(detail.ratingTags, (req, res) => {
  let id = req.query.id;
  request(`https://restapi.ele.me/ugc/v2/restaurants/${id}/ratings/tags`, (error, response, data) => {
    if (error) console.log(error);
    res.send(data);
  })
});

//详细评价
app.get(detail.judgeList, (req, res) => {
  //参数 店铺id   偏移量offset
  let restaurant_id = req.query.id;
  let offset = parseInt(req.query.offset) || 0;
  offset = offset < 0 ? 0 : offset;
  request(`https://restapi.ele.me/ugc/v3/restaurants/${restaurant_id}/ratings?has_content=true&offset=${offset}&limit=20`, (error, response, data) => {
    if (error) console.log(error);
    res.send(data);
  })
});

//获取订单列表页数据
app.get('/orderlist', (req, res) => {
  let id = req.query.userid;
  let offset = parseInt(req.query.offset) || 0;
  console.log(id, offset);
  offset = offset < 0 ? 0 : offset;
  let limit = 10;
  let user=orderList.find(item=>parseInt(item.id) === parseInt(id));
  let orders = user.orders;
  if (orders && orders.length > 0) {
    let backOrder = orders.slice(offset, offset + limit);
    let hasMore = true;
    if (orders.length <= offset + limit) {
      hasMore = false;
    }
    res.json({code: 0, hasMore, orderList: backOrder})
  }
  /*read('./mock/orderlist.json', (data) => {
    console.log(data);
    let user = data.find(item => {

      return parseInt(item.id) === parseInt(id)
    });
    console.log(user);
    let orders = user.orders;
    if (orders && orders.length > 0) {
      let backOrder = orders.slice(offset, offset + limit);
      let hasMore = true;
      if (orders.length <= offset + limit) {
        hasMore = false;
      }
      res.json({code: 0, hasMore, orderList: backOrder})
    }
  });*/
});

//订单详情   未完成
app.get('/order', (req, res) => {
  //参数  userid 用户id    orderid  订单id
  let {orderid, userid} = req.query;
  orderid = parseInt(orderid);
  read('./mock/orderlist.json', (data) => {
    let user = data.find(item => item.id === userid);
    if (user) {
      let order = user.orders.find(item => item.id === orderid);
      if (order) {
        res.json({code: 0, order, msg: '查询到订单'});
      } else {
        res.json({code: 1, msg: '未找到订单'})
      }
    } else {
      res.json({code: 1, msg: '未找到用户'});
    }
  });
});


//注册
app.post('/reg', (req, res) => {
  //校验
  let {phone, password, username} = req.body;
  if (phone.length !== 11 || typeof phone !== 'string') {
    return res.json({code: 1, msg: '请输入正确的电话号码'});
  }
  if (password.length < 6 || password.length > 18 || typeof password !== 'string') {
    return res.json({code: 1, msg: '请输入有效的密码'});
  }
  if (username.length === 0 || typeof username !== 'string') {
    return res.json({code: 1, msg: '用户名数据错误'});
  }
  //去重
  let user = req.body;
  read('./mock/users', (data) => {
    let oldUser = data.find(item => item.phone === user.phone || item.username === user.username);
    if (oldUser) {
      return res.json({code: 1, msg: '手机号或账户名已被注册'});
    }
    //初始化
    user.id = users.length > 0 ? users[users.length - 1].id * 1 + 1 : 1;
    data.push(user);
    write('./mock/users.json', users, () => {
      res.json({code: 0, msg: '注册成功'});
    });
  });
});

app.post('/login', (req, res) => {
  let {phone, password, username} = req.body;
  if (phone.length !== 11 || typeof phone !== 'string') {
    return res.json({code: 1, msg: '请输入正确的电话号码'});
  }
  if (password.length < 6 || password.length > 18 || typeof password !== 'string') {
    return res.json({code: 1, msg: '请输入有效的密码'});
  }
  let user = req.body;
  read('./mock/users.json', users => {
    let oldUser = users.find(item => parseInt(item.phone) === parseInt(user.phone) && item.password === user.password);
    if (oldUser) {
      req.session.users.push({
        id: oldUser.id,
        username: oldUser.username
      });
      res.json({
        code: 0,
        msg: '登陆成功',
        data: {
          id: oldUser.id,
          username: oldUser.username
        }
      });
    } else {
      res.json({code: 1, msg: '手机号或密码错误'});
    }
  })
});

//----------------------------------------------------------------------------
//少一个更新头像
app.post('/updateuser', (req, res) => {
  let {userid} = req.body;
  read('./mock/users.json', data => {
    let user = data.find(item => parseInt(item.id) === parseInt(userid));
    if (user) {
      data = data.map(item => {
        if (user.id === item.id) {
          return user;
        }
        return item;
      });
      write('./mock/users.json', data, () => {
        res.json({code: 0, msg: '修改成功'});
      })
    } else {
      res.json({code: 1, msg: '修改失败'});
    }
  })
});

app.post('/updatepassword', (req, res) => {
  let {userid, oldpassword, newpassword} = req.body;
  if (oldpassword === newpassword) {
    res.json({code: 1, msg: '您想要修改的密码和之前的密码相同'});
  } else {
    read('./mock/users.json', data => {
      let user = data.find(item => parseInt(item.id) === parseInt(userid) && item.password === oldpassword);
      if (user) {
        data = data.map(item => {
          if (user === item) {
            if (newpassword) {
              user.password = newpassword;
            }
            return user;
          }
          return item;
        });
        write('./mock/users.json', data, () => {
          res.json({code: 0, msg: '修改成功'});
        })
      } else {
        res.json({code: 1, msg: '修改失败'});
      }
    })
  }
});

app.post('/logout', (req, res) => {
  //参数 id
  req.session.users = req.session.users.filter(item => item.id !== parseInt(req.query.id));
  let user = req.session.users.find(item => item.uid === parseInt(req.query.uid));
  if (user) {
    res.send({code: 1, msg: '退出登录失败！'});
  } else {
    res.send({code: 0, msg: '退出登录成功'});
  }
});

//获取用户详情
app.get('/userdetail', (req, res) => {
  let id = req.query.id;
  read('./mock/users.json', users => {
    let user = users.find(item => parseInt(item.id) === parseInt(id));
    if (user) {
      res.json({
        code: 0,
        msg: '找到用户',
        user: {
          id: user.id,
          username: user.username,
          phone: user.phone
        }
      });
    } else {
      res.json({code: 1, msg: '未找到用户'})
    }
  })
});

//获取地址
app.get('/address', (req, res) => {
  let {id} = req.query;
  read('./mock/address.json', data => {
    let user = data.find(item => parseInt(item.id) === parseInt(id));
    if (user) {
      if (user.address.length > 0) {
        res.json(user.address);
      } else {
        res.json({code: 1, msg: '该用户没有保存地址'});
      }
    } else {
      res.json({code: 1, msg: '未找到用户'})
    }
  });
});

//修改地址
app.post('/updateaddress', (req, res) => {
  let address = req.body;
  read('./mock/address.json', data => {
    let user = data.find(item => parseInt(item.id) === parseInt(address.user_id));
    if (user) {
      user.address = user.address.map(item => {
        if (parseInt(item.user_id) === parseInt(address.user_id)) {
          return address;
        }
        return item;
      });
    } else {
      return res.json({code: 1, msg: '未找到用户'});
    }
    data = data.map(item => {
      if (parseInt(item.id) === parseInt(user.id)) {
        return user;
      }
      return item;
    });
    write('./mock/address.json', data, () => {
      res.json({code: 0, msg: '修改成功'});
    });
  })
});

//添加地址
app.post('/addaddress', (req, res) => {
  let address = req.body;
  read('./mock/address.json', data => {
    let user = data.find(item => parseInt(item.id) === parseInt(address.user_id));
    if (user) {
      user.address.push(address);
      data = data.map(item => {
        if (parseInt(item.id) === parseInt(user.id)) return user;
        return item;
      });
    } else {
      user = {
        id: data.length > 0 ? data[data.length - 1].id * 1 + 1 : 1,
        address: [address]
      };
      data.push(user);
    }
    write('./mock/address.json', data, () => {
      res.json({code: 0, msg: '添加成功'});
    })
  })
});

//提交订单
app.post('/orderfood', (req, res) => {
  let {order} = req.body;

  read('./mock/orderlist.json', data => {
    let user = data.find(item => item.id === parseInt(order.id));
    if (user) {
      user.orders.push(order);
      write('./mock/orderlist.json', data, () => {
        res.json({code: 0, msg: '订单已完成'});
      })
    } else {
      user = {
        id: order.id,
        orders: [order]
      };
      data.push(user);
      write('./mock/orderlist.json', data, () => {
        res.json({code: 0, msg: '订单已完成'})
      })
    }
  })
});

app.get('/search', (req, res) => {
  let {keyword} = req.query;
  let result = restaurants.filter(item => {
    return JSON.stringify(item).indexOf(keyword) > -1;
  });
  res.json(result);
});


app.get('/filter', (req, res) => {
  let {type} = req.query;
  let result = restaurants.filter(restaurant => {
    let {activities} = restaurant;
    return activities.some(item => parseInt(item.type) === parseInt(type));
  });
  res.json(result);
});

app.listen(3000, () => {
  console.log('ele.me已经启动，监听3000端口');
});