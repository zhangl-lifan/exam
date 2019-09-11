/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 14:54:04
 */
import Login from "../views/login";
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


export default [{
    component: Login,
    path: '/login'
},
{
    children: [
        {
            title: 'menu.question',
            component: Test,
            path: '/main/test',
            children: [
                {
                    title: 'menu.question.viewQuestion',
                    path: '/main/test',
                    redirect: '/main/test/checkQuestion'
                },
                {
                    title: 'menu.question.addQuestion',
                    component: AddQuestion,
                    path: '/main/test/addQuestion'
                },
                {
                    title: 'menu.question.typeQuestion',
                    component: Testlist,
                    path: '/main/test/testlist'
                },
                {
                    component: CheckQuestion,
                    path: '/main/test/checkQuestion'
                },
                {
                    title: 'menu.question',
                    component: TestDatail,
                    path: '/main/test/testDatail'
                }, {
                    component: RiWite,
                    path: '/main/test/reWrite'
                }
            ]
        },
        {
            component: Management,
            path: '/main/management',
            children: [
                {
                    path: '/main/management',
                    redirect: '/main/management/adduser'
                },
                {
                    path: "/main/management/adduser",
                    component: AddUser
                },
                {
                    path: "/main/management/showuser",
                    component: UserShow
                }
            ],

        },
        {
            component: Examinations,
            path: '/main/examinations',
            children: [
                {
                    path: '/main/examinations',
                    redirect: '/main/examinations/addExaminations'
                },
                {
                    path: '/main/examinations/addExaminations',
                    component: AddExam
                },
                {
                    path: '/main/examinations/listExaminations',
                    component: Examguan
                },
            ]
        },

        {
            component: ClassManagement,
            path: '/main/classManagement',
            children: [
                {
                    path: '/main/classManagement',
                    redirect: '/main/classManagement/classRoom'
                },
                { path: '/main/classManagement/classRoom', component: ClassRoom },
                { path: '/main/classManagement/classment', component: Classment },
                { path: '/main/classManagement/studentManagement', component: StudentManagement }
            ]
        },
        {
            component: Marking,
            path: '/main/Marking',
            children: [
                {
                    path: '/main/Marking',
                    redirect: '/main/Marking/Page'
                },
                {
                    path: '/main/marking/Page',
                    component: Page
                }, {
                    path: '/main/marking/detail',
                    component: Detail
                }
            ]
        },

    ],
    component: Main,
    path: '/main'
},
{
    path: '/',
    redirect: '/login'
}

]

