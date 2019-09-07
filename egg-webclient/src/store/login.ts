/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 15:01:20
 */

// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import Subject from "./modules/subject";
import ExamType from "./modules/examType";
import QuestionsType from "./modules/QuestionsType";
import AddRoom from "./modules/addRoom";
import AddGide from "./modules/addGide";
import InsertQuestionsType from "./modules/insertQuestionsType";
import AddQuestions from "./modules/addQuestions";
import GetUser from "./modules/getUser";
import QuestionUpdate from "./modules/questionUpdate"
import Getexamtype from './modules/getExamType';
import Getcourselist from './modules/getcourselist';
import Getclasslist from './modules/getcClassnamelist';
import GetViews from './modules/getviews';
import GetIDlist from './modules/getldlist';
import GetPorts from './modules/getports';
import Getuserlist from './modules/getuserlist';
import Mark from "./modules/marking";
import Detail from './modules/student'
import Room from './modules/room'

// 实例化
const user = new User()
const question = new Question();
const subject = new Subject();
const examType = new ExamType();
const questionsType = new QuestionsType();
const addRoom = new AddRoom();
const addGide = new AddGide()
const insertQuestionsType = new InsertQuestionsType()
const addQuestions = new AddQuestions();
const getUser = new GetUser();
const questionUpdate = new QuestionUpdate()
const getexamtype = new Getexamtype();
const getcourselist = new Getcourselist();
const getclasslist = new Getclasslist();
const getViews = new GetViews();
const getIDlist = new GetIDlist();
const getPorts = new GetPorts();
const getuserlist = new Getuserlist();
const mark = new Mark();
const page = new Detail();
const room = new Room();

export default {
    user,
    question,
    subject,
    examType,
    questionsType,
    addRoom,
    addGide,
    insertQuestionsType,
    addQuestions,
    getUser,
    questionUpdate,
    getexamtype,
    getcourselist,
    getclasslist,
    getViews,
    getIDlist,
    getPorts,
    getuserlist
    mark,
    page,
    room
};