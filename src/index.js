/**
 * Created by hayashisakaikyou on 2017/12/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from './store';
import {Provider} from 'react-redux';
window._store = store;
//上面这行用来调试


import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>, document.querySelector('#root'));

