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
                path: '/main/classManagement',
                children:[
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

