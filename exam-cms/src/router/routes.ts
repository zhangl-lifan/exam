import Login from "../views/login";
import Main from '../views/main';

export default [{
        component: Login,
        path: '/login'
    },
    {
        children: [
            // component: Main,
            // path: '/main/test'
        ],
        component: Main,
        path: '/main'
    },
    {
        path: '/',
        redirect: '/login'
    },

]