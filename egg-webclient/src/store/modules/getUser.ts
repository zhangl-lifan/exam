// getUser

import { observable, action } from 'mobx';
import { getUser } from '../../service/index';

// 引入mobx
class GetUser {
    @action async getUser(): Promise<any> {
        const result: any = await getUser();
        return result;
    }
}

export default GetUser;