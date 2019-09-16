/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-09 14:19:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 08:49:32
 */

import { observable, action } from 'mobx';
import { createExam,updateExam,examType } from '../../service/index';

let element: any = [];

if (window.sessionStorage.getItem('questions')) {
    element = JSON.parse(window.sessionStorage.getItem('questions') + '')
}

class CreateExam {
    @observable questions: any = element;

    @action addQuestions(arr: any) {
        if (arr !== []) {
            window.sessionStorage.setItem('questions', JSON.stringify(arr));
        }
        this.questions = arr;
    }

    @action async createExam(params: any): Promise<any> {
        const result: any = await createExam(params);
        return result;
    }
    
    //更新试卷 
    @action async updateExam(id: any, params: any): Promise<any> {
        const result: any = await updateExam(id, params);
        return result;
    }

    // 试卷列表
    @action async examType(): Promise<any> {
        const result: any = await examType();
        return result;
    }
}

export default CreateExam;