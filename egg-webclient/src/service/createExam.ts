/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-09 14:48:59
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-09 23:12:47
 */
import request from '../utils/request';

export function createExam(params: any) {
    return request.post('exam/exam', params)
}

export function selectExam(params?: any) {
    return request.get('exam/exam', {
        params
    })
}

export function getquestions() {
    return request.get('/exam/exam/w5tcy-g2dts')
}

export function updateExam( id: any, params: any) {
    return request.put(`/exam/exam/${id}`, params)
}