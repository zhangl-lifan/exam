/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-09 21:20:38
 */


import Login from '../views/login';
import Main from '../views/main';
import Test from 'src/views/main/test';
import Management from 'src/views/main/management';
import Examinations from 'src/views/main/examinations';
import ClassManagement from 'src/views/main/classManagement';
import Marking from 'src/views/main/Marking';
import AddQuestion from 'src/views/main/test/addQuestion';
import Testlist from 'src/views/main/test/testlist';
import CheckQuestion from 'src/views/main/test/checkQuestion';
import ClassRoom from 'src/views/main/classManagement/classRoom';
import Classment from 'src/views/main/classManagement/classment';
import StudentManagement from 'src/views/main/classManagement/studentManagement';
import TestDatail from 'src/views/main/test/testDatail';
import RiWite from 'src/views/main/test/reWrite';
import UserShow from 'src/views/main/management/usershow';
import AddUser from 'src/views/main/management/examcomponent';
import Examguan from 'src/views/main/examinations/examguan';
import AddExam from 'src/views/main/examinations/addexam';
import Page from '../views/main/Marking/mark';
import Detail from '../views/main/Marking/detail';
import Details from '../views/main/examinations/addexam/details';
import Unfind from 'src/views/main/unfind/403';
import UnfindFile from 'src/views/main/unfind/404';

export default [
    {
        component: Login,
        path: '/login',
        view_id: "login"
    },
    {
        children: [
            {
                name: "试题管理",
                component: Test,
                path: '/main/test',
                title:'menu.question',
                children: [
                    {
                        from: '/main/test',
                        to: '/main/test/checkQuestion'
                    },
                    {
                        name: "添加试题",
                        title:"menu.question.addQuestion",
                        component: AddQuestion,
                        path: '/main/test/addQuestion',
                        view_id: "main-addQuestions"
                    },
                    {
                        name: "试题分类",
                        title:"menu.question.typeQuestion",
                        component: Testlist,
                        view_id: "main-questionsType",
                        path: '/main/test/testlist'
                    },
                    {
                        component: CheckQuestion,
                        title:"menu.question.viewQuestion",
                        path: '/main/test/checkQuestion',
                        view_id: "main-watchQuestions",
                        name: "查看试题",
                    },
                    {
                        component: TestDatail,
                        path: '/main/test/testDatail',
                        view_id: "main-questionsDetail"
                    },
                    {
                        component: RiWite,
                        path: '/main/test/reWrite',
                        view_id: "main-editQuestions"
                    }
                ]
            },
            {
                component: Management,
                path: '/main/management',
                name: "用户管理",
                children: [
                    {
                        from: '/main/management',
                        to: '/main/management/adduser'
                    },
                    {
                        path: '/main/management/adduser',
                        component: AddUser,
                        view_id: "main-addUser",
                        name: "添加用户"
                    },
                    {
                        name: "用户展示",
                        path: '/main/management/showuser',
                        component: UserShow,
                        view_id: "main-showUser"
                    }
                ]
            },
            {
                component: Examinations,
                path: '/main/examinations',
                name: "考试管理",
                children: [
                    {
                        from: '/main/examinations',
                        to: '/main/examinations/addExaminations'
                    },
                    {
                        path: '/main/examinations/addExaminations',
                        component: AddExam,
                        name: "添加考试",
                        view_id: "main-addExam",
                    },
                    {
                        name: "试卷列表",
                        path: '/main/examinations/listExaminations',
                        component: Examguan,
                        view_id: "main-examList"
                    },

                    {
                        path: '/main/examinations/questions',
                        component: Details,
                        view_id: "main-examDetail"
                    }
                ]
            },

            {
                component: ClassManagement,
                path: '/main/classManagement',
                name: "班级管理",
                children: [
                    {
                        from: '/main/classManagement',
                        to: '/main/classManagement/classRoom'
                    },
                    {
                        path: '/main/classManagement/classRoom',
                        component: ClassRoom,
                        name: "班级管理",
                        view_id: "main-grade"
                    },
                    {
                        path: '/main/classManagement/classment',
                        component: Classment,
                        name: "教室管理",
                        view_id: "main-room"
                    },
                    {
                        path: '/main/classManagement/studentManagement',
                        component: StudentManagement,
                        name: "学生管理",
                        view_id: "main-student"
                    }
                ]
            },
            {
                component: Marking,
                path: '/main/Marking',
                name: "阅卷管理",
                view_id: "main-examinationPapers",
                children: [
                    {
                        from: '/main/Marking',
                        to: '/main/Marking/Page'
                    },
                    {
                        path: '/main/marking/Page',
                        component: Page,
                        name: "待批班级",
                        view_id: "main-examPaperClassmate"
                    },
                    {
                        path: '/main/marking/detail',
                        component: Detail,
                        view_id: "main-examPaperClassList"
                    }
                ]
            }
        ],
        component: Main,
        path: '/main',
        view_id: "main"
    },
    {
        path: '/403',
        component: Unfind
    },{
        path: '/404',
        component: UnfindFile
    },  
    {
        from: "/",
        to: "/login"
    }, {
        from: '*',
        to: '/404'
    }
];
