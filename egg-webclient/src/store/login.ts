/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 11:05:01
 * 
 */

// 引入模块
import User from "./modules/user";
import Question from "./modules/question";
import ClassRoom from "./modules/classroom";
import Create from "./modules/create";
import Mark from "./modules/mark"
import SelectExam from "./modules/selectExam"
import Global from './modules/global';


// 实例化
const user = new User()
const question = new Question();
const classRoom = new ClassRoom();
const create = new Create()
const mark = new Mark();
const global = new Global();
const selectExam = new SelectExam();


export default {
    user,
    question,
    classRoom,
    create,
    mark,
    global,
    selectExam,
};