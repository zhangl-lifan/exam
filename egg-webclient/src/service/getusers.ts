/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 23:31:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-09 17:23:17
 */

import request from '../utils/request';

export function getuserlist(url:any) {
    return request.get(url)
}