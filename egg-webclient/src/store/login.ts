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
import GetUser from "./modules/getUser"

// 实例化
const user =new User()   
const question =new Question();   
const subject =new Subject(); 
const examType = new ExamType();
const questionsType = new QuestionsType();
const addRoom = new AddRoom();
const addGide = new AddGide() 
const insertQuestionsType = new InsertQuestionsType()
const addQuestions = new AddQuestions();
const getUser = new GetUser()


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
    getUser
};