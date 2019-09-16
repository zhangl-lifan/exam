/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-07 14:27:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-15 09:51:43
 */
import { action } from 'mobx';
import {
    question,
    condition,
    addQuestions,
    getcourselist,
    getexamtype,
    insertQuestionsType,
    questionUpdate,
    subject,
    questionsType,
    getquestions,
    upLoadImg,

} from '../../service/index';
    

// 引入mobx
class Question {

    @action async getquestions(): Promise<any> {
        const result: any = await getquestions();
        return result;
    } 

    @action async question(): Promise<any> {
        const result: any = await question();
        return result;
    }

    @action async condition(params: any): Promise<any> {
        const result: any = await condition(params);
        return result;
    }

    @action async addQuestions(params: any): Promise<any> {
        const result: any = await addQuestions(params);
        return result;
    }


   //    获取课程列表
    @action async getcourselist(): Promise<any> {
        const result: any = await getcourselist();
        return result;
    }
    
    // 获取考试类型列表
    @action async getexamtype(): Promise<any> {
        const result: any = await getexamtype();
        return result;
    }


    @action async insertQuestionsType(params: any): Promise<any> {
        console.log(params)
        const result: any = await insertQuestionsType(params);
        return result;
    }



    @action async questionsType(): Promise<any> {
        const result: any = await questionsType();
        return result;
    }

    @action async questionUpdate(params: any): Promise<any> {
        const result: any = await questionUpdate(params);
        return result;
    }

    @action async subject(): Promise<any> {
        const result: any = await subject();
        return result;
    }


    // upLoadImg
    @action async upLoadImg(params: any): Promise<any> {
        const result: any = await upLoadImg(params);
        return result;
    }


}

export default Question;