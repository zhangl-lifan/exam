/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 10:05:31
 * @LastEditTime: 2019-09-07 10:06:12
 * @LastEditors: Please set LastEditors
 */
import request from '../utils/request';

// 获取所有的试题类型
export let getroom= ()=>{
    return request.get('/manger/room');
}