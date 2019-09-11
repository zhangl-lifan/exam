/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:16:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-06 07:40:57
 */
import { observable, action } from 'mobx';
import {login, getUserInfo, getViewAuthority} from '../../service/index';
// import { login } from '../../service/index';
import { setToken, removeToken, setOnceToken } from '../../utils/index';
let account = {};
if (window.localStorage.getItem('account')) {
    account = JSON.parse(window.localStorage.getItem('account') + "")
}
class User {

    @observable isLogin: boolean = false;
    @observable account: any = account;
    @observable userInfo: any = {};
    @observable viewAuthority: Array<object> = []; 

    @action async login(form: any): Promise<any> {
        let result: any = await login(form);
        if (result.code === 1) {
            // 记住密码
            if (form.remember) {
                console.log('记住');
                window.localStorage.setItem('account', JSON.stringify(form));
            } else {
                console.log('没记住');
                window.localStorage.removeItem('account');
            }
            // 七天免登陆
            if (form.autologin) {
                setToken(result.token)
            } else {
                setOnceToken(result.token);
            }
        }
        return result;
    }
    // 退出登陆，移除token
    @action async loginout(): Promise<any> {
        removeToken()
    }

     // 获取用户信息
     @action async getUserInfo(): Promise<any>{
        let userInfo:any = await getUserInfo();
        console.log('userInfo...', userInfo);
        this.userInfo = userInfo.data;
        this.getViewAuthority();
    }

    // 获取用户权限
    @action async getViewAuthority(): Promise<any>{
        let viewAuthority: any = await getViewAuthority();
        console.log('viewAuthority...', viewAuthority);
        this.viewAuthority = viewAuthority.data;
    }
}

export default User;