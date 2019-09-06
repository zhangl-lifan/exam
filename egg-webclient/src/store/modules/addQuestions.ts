// addQuestions

import { action} from 'mobx';
import {addQuestions} from '../../service/index';

class AddQuestions{

    @action async addQuestions(params:any): Promise<any>{
        const result: any = await addQuestions(params);
        return result;
    }
}

export default AddQuestions