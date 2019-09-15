/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-07 14:27:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 11:03:08
 */
import request from '../utils/request';

// 添加用户
export let addUser = (params: any) => {
    return request.post('/user', params)
}


// 获取当前用户信息
export let getUserInfo = ()=>{
    return request.get("/user/userInfo")
}

// 获取用户权限
export let getViewAuthority = ()=>{
    return request.get('/user/view_authority');
}

// 更新用户信息
// /user/user
export let uploadUser = (params:any)=>{
    return request.put('/user/user',params);
}



