/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 10:01:22
 */

// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import Condition from "./modules/question";
import Getroom from './modules/question';
import GradeRoom from "./modules/question";
import DeleteGide from "./modules/question";
import GradeUpdate from "./modules/question";
import AddClassRoom from "./modules/question"
import DeleteRoom from "./modules/question";
import Global from './modules/global';
import Subject from "./modules/question";
import ExamType from "./modules/question";
import QuestionsType from "./modules/question";
import AddRoom from "./modules/question";
import AddGide from "./modules/question";
import InsertQuestionsType from "./modules/question";
import AddQuestions from "./modules/question";
import GetUser from "./modules/question";
import QuestionUpdate from "./modules/question"
import Getexamtype from './modules/question';
import Getcourselist from './modules/question';
import Getclasslist from './modules/question';
import GetViews from './modules/question';
import GetIDlist from './modules/question';
import GetPorts from './modules/question';
import Getuserlist from './modules/question';
import Mark from "./modules/question";
import Detail from './modules/question';
import Room from './modules/question';
import CreateExam from './modules/create';
import SelectExam from './modules/selectExam';
import GetQuestions from './modules/question';
import Updateexam from './modules/question';
import AddUser from './modules/question';

// 实例化
const user = new User()
const question = new Question();
const subject = new Subject();
const examType = new ExamType();
const questionsType = new QuestionsType();
const addRoom = new AddRoom();
const addUser = new AddUser();
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
const getroom = new Getroom();
const condition = new Condition();
const gradeRoom = new GradeRoom();
const deleteGide = new DeleteGide();
const gradeUpdate = new GradeUpdate();
const addClassRoom = new AddClassRoom();
const deleteRoom = new DeleteRoom();
const global = new Global();
const room = new Room();
const createExam = new CreateExam();
const selectExam = new SelectExam();
const getquestions = new GetQuestions();
const updateExam = new Updateexam();

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
    getuserlist,
    mark,
    page,
    addUser,
    getroom,
    condition,
    deleteGide,
    gradeRoom,
    gradeUpdate,
    addClassRoom,
    deleteRoom,
    global,
    room,
    createExam,
    selectExam,
    getquestions,
    updateExam
};