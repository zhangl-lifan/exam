/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 11:05:08
 * @LastEditTime: 2019-09-06 11:13:42
 * @LastEditors: Please set LastEditors
 */
import request from '../utils/request';

// 获取所有的试题类型
export let getmark= ()=>{
    return request.get('/exam/exam');
}
