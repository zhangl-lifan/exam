/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:29:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 07:45:19
 */

import axios from 'axios';
import { AxiosResponse } from 'axios/index';
import { getToken } from './index';


const instance = axios.create({
    baseURL: 'http://172.20.10.11:7001',
    timeout: 1000,
    headers: { 'authorization': getToken() }
})

// 请求拦截器
instance.interceptors.request.use((config: any) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use((Response: AxiosResponse<any>) => {
    return Response.data;
}, (error) => {
    return Promise.reject(error);
})

export default instance;
