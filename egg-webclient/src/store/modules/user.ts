/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:16:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-05 07:57:51
 */
import { observable, action } from 'mobx';
import { login } from '../../service/index';
import { LoginForm } from '../../types/index';
import { setToken } from '../../utils/index';
let account = {};
if (window.localStorage.getItem('account')) {
    account = JSON.parse(window.localStorage.getItem('account') + "")
}
class User {

    @observable isLogin: boolean = false;
    @observable account: any = account;

    @action async login(form: LoginForm): Promise<any> {
        let result: any = await login(form);
        console.log(form)
        if (result.code === 1) {
            if (form.remember) {
                window.localStorage.setItem('account', JSON.stringify(form));
            } else {
                window.localStorage.removeItem('account');
            }
            if (form.autologin) {
                setToken(result.token)
            }
        }
        return result;
    }
}

export default User;