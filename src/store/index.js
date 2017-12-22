import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers';
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import createHashHistory from "history/createHashHistory"
let router=routerMiddleware(createHashHistory());
let store = applyMiddleware(router,thunk,promise,logger)(createStore)(reducers)
window.store=store;
export default store;