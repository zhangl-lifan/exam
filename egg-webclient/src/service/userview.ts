/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 19:30:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-06 23:33:06
 */
import request from '../utils/request';

// 获取视图接口权限数据
export function getViews() {
    return request.get('/user/view_authority');
}

// 获取api接口权限数据
export function getPorts() {
    return request.get('/user/api_authority')
}

// 获取身份列表
export function getIDlist() {
    return request.get('/user/identity')
}