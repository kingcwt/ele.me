/**
 * Created by hayashisakaikyou on 2017/12/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from 'react-redux';
import store from './store';
window._store = store;
//上面这行用来调试

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.querySelector('#root'));
