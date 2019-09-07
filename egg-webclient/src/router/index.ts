/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-02 20:11:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-04 23:01:45
 */
import Login from '../views/login/index';
import Userhome from '../views/user/index';

export default {
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/userhome',
            component: Userhome
        },
        {
            from: '/',
            to: '/login'
        }
    ]
}