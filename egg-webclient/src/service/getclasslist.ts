/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 20:53:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-05 20:55:21
 */
import request from '../utils/request'

export function getclasslist() {
    return request.get('/manger/grade')
}