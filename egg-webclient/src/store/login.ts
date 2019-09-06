// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import Subject from "./modules/subject";
import ExamType from "./modules/examType";
import QuestionsType from "./modules/QuestionsType";
import AddRoom from "./modules/addRoom";
import AddGide from "./modules/addGide";

// 实例化
const user =new User()   
const question =new Question();   
const subject =new Subject(); 
const examType = new ExamType();
const questionsType = new QuestionsType();
const addRoom = new AddRoom();
const addGide = new AddGide() 

export default {
    user,
    question,
    subject,
    examType,
    questionsType,
    addRoom,
    addGide
};