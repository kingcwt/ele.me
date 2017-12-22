import * as types from '../action-types'
import {reg,login} from '../../api/session/session'
import {push} from 'react-router-redux'

export default {
    reg(user){
        return function (dispatch,getState) {
            reg(user).then(result=>{
                let {code,success,error}=result;
                dispatch({
                    type:types.REG,
                    payload:{success,error}
                });
                if(code===0){
                    dispatch(push('/login'))
                }
            })
        }
    },
    login(user){
        return function (dispatch,getState) {
            login(user).then(result=>{
                let {code,success,error,user}=result;
                dispatch({
                    type:types.LOGIN,
                    payload:{success,error,user}
                });
                if(code===0){
                    dispatch(push('/profile'))
                }
            })
        }
    },
    updatepassword(user){
        return function (dispatch,getState) {
            updatepassword(user).then(result=>{
                let {code,success,error,user}=result;
                dispatch({
                    type:types.UPDATEPASSWORD,
                    payload:{success,error}
                });
                if(code===0){
                    dispatch(push('/accounheader'))
                }
            })
        }
    }

}