/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 17:00:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-09 14:45:39
 */
import request from '../utils/request';

// 获取考试类型列表
export function getexamtype() {
    return request.get('/exam/examType');
}

export function getcourselist() {
    return request.get('/exam/subject')
}
