/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:29:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-15 07:51:00
 */

import axios from 'axios';
import { AxiosResponse } from 'axios/index';
import { getToken } from './index';

const Url ={
    '123.206.55.50':'//exam.jasonandjay.com',
    'jasonandjay.com':'//exam.jasonandjay.com',
    '127.0.0.1':'//169.254.19.12:7001',
    'localhost:3000':'//169.254.19.12:7001'
}

const instance = axios.create({
    baseURL:Url[window.location.host] ,
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
