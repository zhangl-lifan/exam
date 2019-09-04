import {observable, action} from 'mobx';
import {login} from '../../service/index';
import {LoginForm} from "../../types/index"

// 引入mobx

class User{
    @observable isLogin: boolean = false;

    @action async login(form: any): Promise<any>{
        const result: any = await login(form);
        return result;
    }
}

export default User;