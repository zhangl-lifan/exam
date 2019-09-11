/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 11:05:08
 * @LastEditTime: 2019-09-09 14:45:57
 * @LastEditors: sueRimn
 */
import request from '../utils/request';

// 获取所有的试题类型
export let getmark= ()=>{
    return request.get('/exam/exam');
}