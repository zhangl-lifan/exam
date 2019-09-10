/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 19:50:52
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-09 20:37:23
 */
import { action } from 'mobx';
import { getquestions } from '../../service/createExam';

class GetQuestions {
    @action async getquestions(): Promise<any> {
        const result: any = await getquestions();
        return result;
    }
}

export default GetQuestions;