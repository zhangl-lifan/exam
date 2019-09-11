/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:36:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 08:45:56
 */
import request from '../utils/request';

//登陆
export function login(params: object) {
    return request.post('/user/login', params);
}

// 获取用户信息
export let getUserInfo = ()=>{
    return request.get('/user/userInfo');
}

// 获取用户权限
export let getViewAuthority = ()=>{
    return request.get('/user/view_authority');
}

