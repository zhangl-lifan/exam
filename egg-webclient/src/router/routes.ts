/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 16:22:58
 * @LastEditTime: 2019-09-07 10:36:02
 * @LastEditors: Please set LastEditors
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
import Page from '../views/main/Marking/mark';
import Detail from '../views/main/Marking/detail';
export default [{
        component: Login,
        path: '/login'
    },
    {
        children: [
            {
                component: Test,
                path: '/main/test',
                children:[
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
                path: '/main/management'
            },
            {
                component: Examinations,
                path: '/main/examinations'
            },
            {
                component: ClassManagement,
                path: '/main/classManagement'
            },
            {
                component: Marking,
                path: '/main/Marking',
                children:[
                    {
                        path:'/main/marking/Page',
                        component:Page
                    },{
                        path:'/main/marking/detail',
                        component:Detail
                    }
                ]
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