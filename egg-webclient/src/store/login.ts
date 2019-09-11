/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-09 20:38:26
 */

// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import AddGide from "./modules/question";
import Condition from "./modules/question";
import AddQuestions from "./modules/question";
import AddRoom from "./modules/question";
import ExamType from "./modules/question";
import Getclasslist from './modules/question';
import Getcourselist from './modules/question';
import Getexamtype from './modules/question';
import GetIDlist from './modules/question';
import GetPorts from './modules/question';
import GetUser from "./modules/question";
import Getuserlist from './modules/question';
import GetViews from './modules/question';
import InsertQuestionsType from "./modules/question";
import Mark from "./modules/question";
import QuestionsType from "./modules/question";
import QuestionUpdate from "./modules/question"
import Getroom from './modules/question';
import Detail from './modules/question'
import Subject from "./modules/question";
import GradeRoom from "./modules/question";
import DeleteGide from "./modules/question";
import GradeUpdate from "./modules/question";
import AddClassRoom from "./modules/question"
import DeleteRoom from "./modules/question";
import Global from './modules/global';
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
import CreateExam from './modules/create';
import SelectExam from './modules/selectExam';
import GetQuestions from './modules/getquestions';
import Updateexam from './modules/updateExam';

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
    getroom,
    condition,
    deleteGide,
    gradeRoom,
    gradeUpdate,
    addClassRoom,
    deleteRoom,
    global
    room,
    createExam,
    selectExam,
    getquestions,
    updateExam
};