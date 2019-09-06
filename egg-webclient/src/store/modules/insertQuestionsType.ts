import {observable, action} from 'mobx';
import {insertQuestionsType} from '../../service/index';

class InsertQuestionsType{

    @action async insertQuestionsType(params:any): Promise<any>{
        console.log(params)
        const result: any = await insertQuestionsType(params);
        return result;
    }
}

export default InsertQuestionsType;
