/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:29:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-06 16:56:28
 */

import axios from 'axios';
import { AxiosResponse } from 'axios/index';
import { getToken } from './index';

const instance = axios.create({
    baseURL: ' http://127.0.0.1:7001',
    timeout: 1000,
    headers: { 'authorization': getToken() }
})

//请求拦截器
instance.interceptors.request.use((config: any) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

//响应拦截器
instance.interceptors.response.use((Response: AxiosResponse<any>) => {
    // console.log(Response);
    return Response.data;
}, (error) => {
    return Promise.reject(error);
})

export default instance;
