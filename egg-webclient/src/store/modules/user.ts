/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:16:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 08:51:52
 */
import { observable, action } from 'mobx';
import {addUser,login,getUserInfo,getViewAuthority,uploadUser,
        getIDlist,addView,updateUser,setView,setApi,addApi,
        addidentity,userAdd,getPorts,getuserlist,getUser,getViews
    } from '../../service/index';

import { setToken, removeToken, setOnceToken} from '../../utils/index';

let account = {};

if (window.localStorage.getItem('account')) {
    account = JSON.parse(window.localStorage.getItem('account') + "")
}
class User {
    @observable account: any = account
    @observable userInfo: any = {};
    @observable viewAuthority:Array<object>=[];
    @observable avatar:string = ''

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
    @action async getUserInfo(): Promise<any> {
        let userInfo:any = await getUserInfo()
        console.log('userInfo',userInfo)
        this.userInfo = userInfo.data;
        this.avatar = userInfo.data.avatar;
        this.getViewAuthority()
    }

    // 获取用户权限
    @action async getViewAuthority(): Promise<any>{
        let viewAuthority: any = await getViewAuthority();
        // console.log('viewAuthority...', viewAuthority);
        this.viewAuthority = viewAuthority.data;
    }

    // 更改头像
    @action changAuthority(avatar:any):any{
        this.avatar = avatar
    }

    //更新用户信息
     @action async uploadUser(params:any): Promise<any>{
        // let rest:any = await this.getUserInfo();
        // console.log('User--',this)
        let result: any = await uploadUser(params);
        return result
    }


    // 添加权限
    @action async addView(params: any): Promise<any> {
        const result: any = addView(params);
        return result;
    }

    // 更新用户
    @action async updateUser(params:any): Promise<any> {
        const result: any = updateUser(params);
        return result;
    }

    // 给身份设定视图权限
    @action async setView(params: any): Promise<any> {
        const result: any = setView(params);
        return result;
    }

    // 给身份设定api接口权限
    @action async setApi(params: any): Promise<any> {
        const result: any = setApi(params);
        return result;
    }

    // 添加api接口
    @action async addApi(params: any): Promise<any> {
        const result: any = await addApi(params);
        return result
    }

    // 添加身份
    @action async addidentity(params: any): Promise<any> {
        const result: any = await addidentity(params);
        return result;
    }

    // 添加用户
    @action async userAdd(params: any): Promise<any> {
        const result: any = await userAdd(params);
        return result;
    }
   
    // 添加用户
    @action async addUser(params: any): Promise<any> {
        const result: any = await addUser(params);
        return result;
    }

    // 获取身份列表
    @action async getIDlist(): Promise<any> {
        const result: any = await getIDlist();
        return result;
    }

    // 获取api接口权限数据
    @action async getPorts(): Promise<any> {
        const result: any = await getPorts();
        return result;
    }

    // 获取用户列表
    @action async getuserlist(url: any): Promise<any> {
        const result: any = await getuserlist(url);
        return result;
    }

    // 获取用户
        // getUser
        @action async getUser(): Promise<any> {
            const result: any = await getUser();
            return result;
        }

    // 获取视图接口权限数据
    @action async getViews(): Promise<any> {
        const result: any = await getViews();
        return result;
    }
    

}

export default User;