// questionUpdate
import {observable, action} from 'mobx';
import {questionUpdate} from '../../service/index';

// 引入mobx

class QuestionUpdate{

    @action async questionUpdate(params:any): Promise<any>{
        const result: any = await questionUpdate(params);
        return result;
    }
}

export default QuestionUpdate;