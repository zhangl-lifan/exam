/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 23:31:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 08:47:18
 */

import request from '../utils/request';

export function getuserlist() {
    return request.get('/user/user')
}