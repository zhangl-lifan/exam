import {observable, action} from 'mobx';
import {questionsType} from '../../service/index';

// 引入mobx
class QuestionsType{

    @action async questionsType(): Promise<any>{
        const result: any = await questionsType();
        return result;
    }
}

export default QuestionsType;