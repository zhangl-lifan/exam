/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:29:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-05 00:09:56
 */

import axios from 'axios';
import { AxiosResponse } from 'axios/index';
//import { getToken } from './index';

const instance = axios.create({
    baseURL: 'http://169.254.88.18:7001',
    timeout: 2000,
   // headers: { 'authorization': getToken() }
})

instance.interceptors.request.use((config: any) => {
    return config;
}, (error: any) => {
    return Promise.reject(error);
})

instance.interceptors.response.use((Response: AxiosResponse<any>) => {
    console.log(Response);
    return Response.data;
}, (error: any) => {
    return Promise.reject(error);
})

export default instance;