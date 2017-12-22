let express = require('express');
let request = require('request');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();
app.listen(3000, () => {
  console.log('3000 ok');
});

let restaurants = require('./mock/restaurants');


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

app.use(bodyParser.json());
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
<<<<<<< HEAD
=======
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

>>>>>>> 4c471a0e283fa1d14f95f0a63a2606479e1d45bc

//首页
app.get('/restaurants', (req, res) => {
  let offset = parseInt(req.query.offset) || 0;
  let limit = 5;
  let hasMore = true;
  //商店列表  参数 offset
  let result = restaurants.slice(offset, offset + limit);
  if (restaurants.length <= offset + limit) {
    hasMore = false;
  }
  res.json({hasMore, restaurants: result});
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

//搜索地址  ``````````````
app.get('/searchlocation', (req, res) => {
  let keyword = req.query.keyword;
  keyword = encodeURIComponent(keyword);
  request(`https://restapi.ele.me/bgs/poi/search_poi_nearby?keyword=${keyword}&offset=0&limit=20&longitude=116.407173&latitude=39.90469`, function (error, response, data) {
    res.send(data);
  })
});

//详情页菜单
app.get('/menu', (req, res) => {
  //菜单及描述  参数  id
  let restaurant_id = req.query.id;
  restaurant_id = parseInt(restaurant_id);
  if (!isNaN(restaurant_id)) {
    request(`https://restapi.ele.me/shopping/v2/menu?restaurant_id=${restaurant_id}`, function (error, response, data) {
      res.send(data);
    })
  }
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
  let offset = parseInt(req.query.offset) || 0;
  let limit = 5;
  let hasMore = true;
  //商店列表  参数 offset
  let result = restaurants.slice(offset, offset + limit);
  if (restaurants.length <= offset + limit) {
    hasMore = false;
  }
  res.json({hasMore, restaurants: result});
});

app.get('/orderlist', (req, res) => {
  //获取订单列表页数据
  let {offset} = req.query;
  let limit = 5;
  offset = parseInt(offset);
  //if (res.session.user) {
  read('./mock/orderlist.json', data => {
    //let orderList = data.orderList;
    let result = data.slice(offset, offset + limit);
    let hasMore = true;
    if (data.length <= offset + limit) {
      hasMore = false;
    }
    res.json({hasMore, orderList: result});
  })
  /*} else {
    // 这里重定向还没定路由
    res.redirect('');
  }*/
});

app.get('/order', (req, res) => {
  //订单详情 参数 订单id   自己写
  let {orderid} = req.query;
  orderid = parseInt(orderid);
  if (orderid) {
    read('./mock/orderlist.json', data => {
      let orderList = data.orderList || [];
      let order = orderList.filter(item => item.id === orderid);
      res.json(order);
    })
  }
});


//拿不到post的req.body
app.post('/reg', (req, res) => {
  let user = req.body;
  read('./mock/users.json', users => {
    let oldUser = users.find(item => parseInt(item.phone) === parseInt(user.phone));
    if (oldUser) {
      res.json({code: 1, msg: '用户名已经存在'});
    } else {
      user.id = users.length > 0 ? users[users.length - 1].id * 1 + 1 : 1;
      //在这里要添加默认头像
      users.push(user);
      write('./mock/users.json', users, () => {
        res.json({code: 0, msg: '注册成功'});
      });
    }
  })
});

app.post('/login', (req, res) => {
  let user = req.body;
  read('./mock/users.json', users => {
    let oldUser = users.find(item => parseInt(item.phone) === parseInt(user.phone) && item.password === user.password);
    if (oldUser) {
      //req.session.user = oldUser;
      res.json({code: 0, msg: '登陆成功'});
    } else {
      res.json({code: 1, msg: '用户名或密码错误'});
    }
  })
});


//少一个更新头像
app.post('/updateusername', (req, res) => {
  let {userid, username} = req.body;
  read('./mock/users.json', data => {
    let user = data.find(item => parseInt(item.id) === parseInt(userid));
    if (user) {
      data = data.map(item => {
        if (user === item) {
          user.username = username;
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
    res.json({code: 2, msg: '您想要修改的密码和之前的密码相同'});
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
  //req.session.user = null;
  res.json({code: 0, msg: '退出成功'});
});

app.get('/userdetail', (req, res) => {
  let id = req.query.id;
  read('./mock/users.json', users => {
    let user = users.find(item => parseInt(item.id) === parseInt(id));
    if (user) {
      res.json(user);
    } else {
      res.json({code: 1, msg: '用户信息显示失败'})
    }
  })
});

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

app.post('/updateaddress', (req, res) => {
  let address = req.body;
  read('./mock/address.json', data => {
    let user = data.find(item => parseInt(item.id) === parseInt(address.user_id));
    //??????????? 为什么只有这里需要加返回值
    user.address = user.address.map(item => {
      if (parseInt(item.user_id) === parseInt(address.user_id)) {
        return address;
      }
      return item;
    });
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

app.post('/orderfood', (req, res) => {
  let order = req.body;
  read('./mock/orderlist.json', data => {
    data.push(order);
    write('./mock/orderlist.json', data, () => {
      res.json({code: 0, msg: '点餐成功'});
    })
  })
});

app.get('/search', (req, res) => {
  let {keyword} = req.query;
  let result = restaurants.filter(item => {
<<<<<<< HEAD
    return item.name.indexOf(keyword) > -1;
=======
    return JSON.stringify(item).indexOf(keyword) > -1;
>>>>>>> 4c471a0e283fa1d14f95f0a63a2606479e1d45bc
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
