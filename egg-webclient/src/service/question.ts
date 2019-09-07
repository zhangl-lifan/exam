import request from '../utils/request';

// 按条件获取试题
export let question = ()=>{
    return request.get('/exam/questions/condition');
}

// 获取所有的考试类型
export function examType() {
    return request.get('/exam/examType');
}

// 获取所有的试题类型
export let questionsType = ()=>{
    return request.get('/exam/getQuestionsType');
}

// 获取所有的课程
export let subject = ()=>{
    return request.get('/exam/subject');
}

// 添加教室接口
export let addGide = ()=>{
    return request.get('/manger/room');
}

// 添加班级
export let addRoom = ()=>{
    return request.get('/manger/grade');
}

// 添加试题类型
// /exam/insertQuestionsType
export let insertQuestionsType = (params:any)=>{
    console.log(params)
    return request.get('/exam/insertQuestionsType',{params});
}

// 添加试题接口
// /exam/questions
export let addQuestions = (params:any)=>{
    console.log(params)
    return request.post('/exam/questions',params);
}

// 获取当前用户信息
// /user/userInfo
export let getUser = ()=>{
    return request.get('/user/userInfo');
}

// 更新试题
// /exam/questions/update
export let questionUpdate = (params:any)=>{
    return request.put('/exam/questions/update',{questions_id:params});
}