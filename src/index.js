/**
 * Created by hayashisakaikyou on 2017/12/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from './store';
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector('#root'));
