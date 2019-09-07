/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 15:43:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 01:52:57
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
import UserShow from 'src/views/main/management/usershow';
import AddUser from 'src/views/main/management/examcomponent';
import Examguan from 'src/views/main/examinations/examguan';
import AddExam from 'src/views/main/examinations/addexam';

export default [{
    component: Login,
    path: '/login'
},
{
    children: [
        {
            component: Test,
            path: '/main/test',
            children: [
                {
                    path: '/main/test',
                    redirect: '/main/test/checkQuestion'
                },
                {
                    component: AddQuestion,
                    path: '/main/test/addQuestion'
                },
                {
                    component: Testlist,
                    path: '/main/test/testlist'
                },
                {
                    component: CheckQuestion,
                    path: '/main/test/checkQuestion'
                },
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
            path: '/main/classManagement'
        },
        {
            component: Marking,
            path: '/main/Marking'
        },
        {
            path: '/main',
            redirect: '/main/test'
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