// examType
import {observable, action} from 'mobx';
import {examType,insertQuestionsType} from '../../service/index';

// 引入mobx
class ExamType{

    @action async examType(): Promise<any>{
        const result: any = await examType();
        return result;
    }
}

export default ExamType;