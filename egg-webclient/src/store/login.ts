/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 08:49:15
 */

// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import Subject from "./modules/subject";
import Getexamtype from './modules/getExamType';
import Getcourselist from './modules/getcourselist';
import Getclasslist from './modules/getcClassnamelist';
import GetViews from './modules/getviews';
import GetIDlist from './modules/getldlist';
import GetPorts from './modules/getports';
import Getuserlist from './modules/getuserlist';

// 实例化
const user = new User()
const question = new Question();
const subject = new Subject();
const getexamtype = new Getexamtype();
const getcourselist = new Getcourselist();
const getclasslist = new Getclasslist();
const getViews = new GetViews();
const getIDlist = new GetIDlist();
const getPorts = new GetPorts();
const getuserlist = new Getuserlist();

export default {
    user,
    question,
    subject,
    getexamtype,
    getcourselist,
    getclasslist,
    getViews,
    getIDlist,
    getPorts,
    getuserlist
};