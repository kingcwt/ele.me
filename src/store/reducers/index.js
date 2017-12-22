import {combineReducers} from 'redux'

import session from './session'
import {routerReducer} from 'react-router-redux'
let reducers = combineReducers({
    session,

    router:routerReducer
});
export default reducers;
