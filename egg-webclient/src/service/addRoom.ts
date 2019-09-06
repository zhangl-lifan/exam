// 添加教室接口
import request from '../utils/request';

export let addRoom = ()=>{
    return request.get('/manger/grade');
}
