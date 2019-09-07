/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 10:03:29
 * @LastEditTime: 2019-09-07 10:07:06
 * @LastEditors: Please set LastEditors
 */
import request from '../utils/request';

// 获取所有的试题类型
export let getstudent= ()=>{
    return request.get('/manger/student');
}
