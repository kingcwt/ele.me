import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';

let router = routerMiddleware(createHashHistory());



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//中间件
//router   在actions中a使用dispatch(push('/xxx'))  跳转到某个路由
//thunk    可以在actions中返回函数 并执行
//promise  可以直接返回promise,然后拿到promise返回的数据
//logger   在控制台打印出 前后的状态
let store = composeEnhancers(applyMiddleware(router,thunk, promise, logger))(createStore)(reducers);

/*let store = applyMiddleware(router, thunk, promise, logger)(createStore)(reducers);

let store = composeEnhancers(applyMiddleware(router,thunk, promise, logger))(createStore)(reducers);*/

let store = applyMiddleware(router, thunk, promise, logger)(createStore)(reducers);


window.store = store;
export default store;