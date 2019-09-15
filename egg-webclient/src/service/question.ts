/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-07 14:27:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-15 09:51:07
 */
import request from '../utils/request';

// 获取所有的试题
export let question = () => {
    return request.get('/exam/questions/new');
}
// 添加视图接口权限
export let addView = (params: any) => {
    return request.get('/user/authorityView/edit', {
        params
    });
}
//更新用户信息
export let updateUser = (params: any) => {
    return request.put('/user/user', params);
}
// 给身份设定api接口权限
export let setApi = (params: any) => {
    return request.post('/user/setIdentityApi', params);
}
// 给身份设定视图权限
export let setView = (params: any) => {
    return request.post('/user/setIdentityView', params);
}
// 获取所有的考试类型
export function examType() {
    return request.get('/exam/examType');
}
// 添加api接口
export function addApi(params: any) {
    return request.get('/user/authorityApi/edit', {
        params
    })
}
// 获取所有的试题类型
export let questionsType = () => {
    return request.get('/exam/getQuestionsType');
}

// 获取所有的课程
export let subject = () => {
    return request.get('/exam/subject');
}

// 添加教室接口
export let addGide = () => {
    return request.get('/manger/room');
}

// 获取班级数据
export let addRoom = () => {
    return request.get('/manger/grade');
}

// 添加班级
export let gradeRoom = (params: any) => {
    return request.post('/manger/grade', params);
}

// 添加试题类型
// /exam/insertQuestionsType
export let insertQuestionsType = (params: any) => {
    console.log(params)
    return request.get('/exam/insertQuestionsType', { params });
}

// 添加试题接口
// /exam/questions
export let addQuestions = (params: any) => {
    return request.post('/exam/questions', params);
}

// 获取当前用户信息
// /user/userInfo
export let getUser = () => {
    return request.get('/user/userInfo');
}

// 更新试题
// /exam/questions/update
export let questionUpdate = (params: any) => {
    return request.put('/exam/questions/update', { questions_id: params });
}
// 按条件获取试题
// /exam/questions/condition

export let condition = (params: any) => {
    return request.get('/exam/questions/condition', { params });
}

// 获取视图接口权限数据
export function getViews() {
    return request.get('/user/view_authority');
}

// 获取api接口权限数据
export function getPorts() {
    return request.get('/user/api_authority')
}

// 获取身份列表
export function getIDlist() {
    return request.get('/user/identity')
}

// 获取班级列表
export function getclasslist() {
    return request.get('/manger/grade')
}

// 获取考试类型列表
export function getexamtype() {
    return request.get('/exam/examType');
}

// 获取课程列表
export function getcourselist() {
    return request.get('/exam/subject')
}

// 获取所有的试题类型
export let getmark = () => {
    return request.get('/exam/exam');
}

// 获取所有的班级
export let getroom = () => {
    return request.get('/manger/room');
}

// 获取所有已经分班的学生的接口
export let getstudent = () => {
    return request.get('/manger/student');
}


// 删除班级的接口
// /manger/grade/delete
export let deleteGide = (params: any) => {
    return request.delete('/manger/grade/delete', { data: params });
}

// 更新班级信息
// /manger/grade/update
export let gradeUpdate = (params: any) => {
    return request.put('/manger/grade/update', params);
}

// 添加教室的接口
// /manger/room
export let addClassRoom = (params: any) => {
    return request.post('/manger/room', params);
}

// 删除教室的接口
// /manger/room/delete
export let deleteRoom = (params: any) => {
    return request.delete('/manger/room/delete', { data: params });
}

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

export function updateExam(id: any, params: any) {
    return request.put(`/exam/exam/${id}`, params)
}

export function getuserlist(url: any) {
    return request.get(url)
}

//登陆
export function login(params: any) {
    console.log(params);
    return request.post('/user/login', params);
}

// 获取用户信息
export let getUserInfo = () => {
    return request.get('/user/userInfo');
}

// 获取用户权限
export let getViewAuthority = () => {
    return request.get('/user/view_authority');
}

// 添加用户
export let addUser = (params: any) => {
    return request.post('/user', params)
}

// 删除学生
// /manger/student/:id=>student_id
export let deleteStudent = (id: any) => {
    return request.delete(`/manger/student/${id}`);
}

export let upLoadImg = (form: any) => {
    return request({
        method: 'post',
        url: 'http://123.206.55.50:11000/upload',
        data: form
    })
}
// 添加用户

export let userAdd = (params: any) => {
    return request.post('/user', params);
}
//添加身份
export let addidentity = (params: any) => {
    return request.get('/user/identity/edit', {
        params
    })
}