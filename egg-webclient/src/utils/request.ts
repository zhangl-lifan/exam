import axios from 'axios';
import {AxiosResponse} from 'axios/index';

const save = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWduVGltZSI6MTU2NzY0MDczMDE5OSwidXNlcl9pZCI6Inc2bDZuLWNidmw2cyIsInVzZXJfbmFtZSI6ImNoZW5tYW5qaWUiLCJpZGVudGl0eV9pZCI6IjYzbm85cC04eTBrNCIsImlkZW50aXR5X3RleHQiOiLnrqHnkIblkZgiLCJpYXQiOjE1Njc2NDA3MzB9.aVFKzyHXV-np2VbeCw5SNZhpJdS6UH-cKA1VjIQJOBw"

const request = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
    headers: {'authorization':save }
});

// 请求拦截器
request.interceptors.request.use( (config) =>{
    return config;
  }, (error)=> {
    return Promise.reject(error);
  }
);
 
// 响应拦截器
request.interceptors.response.use( (response: AxiosResponse<any>) =>{
    // Do something with response data
    return response.data;
  },  (error) =>{
    // Do something with response error
    return Promise.reject(error);
  }
);

export default request;