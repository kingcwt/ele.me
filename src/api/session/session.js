import {ajax} from '../index'

//注册
export function reg(user) {
    return ajax({
        method:"post",
        url:"http://localhost:3000/reg"
    })

}
// 登陆
export function login(user) {
    return ajax({
        method:"post",
        url:"http://localhost:3000/login"
    })
}
export function updatepassword(user) {
    return ajax({
        method:"post",
        url:"http://localhost:3000/updatepassword"
    })
}

