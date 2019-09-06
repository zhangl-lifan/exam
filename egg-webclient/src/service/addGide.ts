// 添加教室接口
import request from '../utils/request';


// 添加教室接口
export let addGide = ()=>{
    return request.get('/manger/room');
}