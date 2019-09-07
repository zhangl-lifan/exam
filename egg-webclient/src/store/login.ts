/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 16:22:58
 * @LastEditTime: 2019-09-07 10:32:59
 * @LastEditors: Please set LastEditors
 */
// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import Subject from "./modules/subject";
import Mark from "./modules/marking";
import Detail from './modules/student'
import Room from './modules/room'
// 实例化
const user =new User()   
const question =new Question();   
const subject =new Subject();   
const mark=new Mark();
const page =new Detail();
const room=new Room();
export default {
    user,
    question,
    subject,
    mark,
    page,
    room
};