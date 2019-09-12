/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-07 14:27:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 14:56:22
 */
import request from '../utils/request';

// 获取所有的试题
// /exam/questions/new
export let question = () => {
    return request.get('/exam/questions/new');
}

// 获取所有的考试类型
export function examType() {
    return request.get('/exam/examType');
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
export let gradeRoom = (params:any) => {
    return request.post('/manger/grade',params);
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

export let condition = (params:any) => {
    return request.get('/exam/questions/condition',{params});
}

// 获取用户列表
export function getuserlist() {
    return request.get('/user/user')
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
export let getmark= ()=>{
    return request.get('/exam/exam');
}

// 获取所有的班级
export let getroom= ()=>{
    return request.get('/manger/room');
}

// 获取所有已经分班的学生的接口
export let getstudent= ()=>{
    return request.get('/manger/student');
}


// 删除班级的接口
// /manger/grade/delete
export let deleteGide= (params:any)=>{
    return request.delete('/manger/grade/delete',{data:params});
}

// 更新班级信息
// /manger/grade/update
export let gradeUpdate = (params: any) => {
    return request.put('/manger/grade/update', params);
}

// 添加教室的接口
// /manger/room
export let addClassRoom = (params:any) => {
    return request.post('/manger/room',params);
}

// 删除教室的接口
// /manger/room/delete
export let deleteRoom= (params:any)=>{
    return request.delete('/manger/room/delete',{data:params});
}


// 删除学生
// /manger/student/:id=>student_id
export let deleteStudent= (id:any)=>{
    return request.delete(`/manger/student/${id}`);
}

export let upLoadImg = (form:any)=>{
    return request({
        method: 'post',
        url: 'http://123.206.55.50:11000/upload',
        data: form
    })
}
