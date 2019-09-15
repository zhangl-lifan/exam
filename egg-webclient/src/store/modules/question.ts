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
    getPorts,
    addGide,
    condition,
    addQuestions,
    addRoom,
    examType,
    getclasslist,
    getcourselist,
    getexamtype,
    getIDlist,
    getViews,
    insertQuestionsType,
    getmark,
    questionUpdate,
    getroom,
    getstudent,
    subject,
    gradeRoom,
    deleteGide,
    gradeUpdate,
    addClassRoom,
    deleteRoom,
    questionsType,
    getuserlist,
    getquestions,
    addUser,
    getUser,
    updateExam,
    upLoadImg,
    deleteStudent,
    userAdd,
    addidentity,
    addApi,
    addView,
    setApi,
    setView,
    updateUser
} from '../../service/index';
    

// 引入mobx
class Question {

    @action async getquestions(): Promise<any> {
        const result: any = await getquestions();
        return result;
    }
    @action async addView(params: any): Promise<any> {
        const result: any = addView(params);
        return result;
    }
    @action async updateUser(params:any): Promise<any> {
        const result: any = updateUser(params);
        return result;
    }
    @action async setView(params: any): Promise<any> {
        const result: any = setView(params);
        return result;
    }
    @action async setApi(params: any): Promise<any> {
        const result: any = setApi(params);
        return result;
    }
    @action async addApi(params: any): Promise<any> {
        const result: any = await addApi(params);
        return result
    }
    @action async addidentity(params: any): Promise<any> {
        const result: any = await addidentity(params);
        return result;
    }
    @action async userAdd(params: any): Promise<any> {
        const result: any = await userAdd(params);
        return result;
    }

    @action async addUser(params: any): Promise<any> {
        const result: any = await addUser(params);
        return result;
    }

    @action async updateExam(id: any, params: any): Promise<any> {
        const result: any = await updateExam(id, params);
        return result;
    }

    @action async question(): Promise<any> {
        const result: any = await question();
        return result;
    }

    @action async addGide(): Promise<any> {
        const result: any = await addGide();
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

    @action async addRoom(): Promise<any> {
        const result: any = await addRoom();
        return result;
    }

    @action async examType(): Promise<any> {
        const result: any = await examType();
        return result;
    }

    @action async getclasslist(): Promise<any> {
        const result: any = await getclasslist();
        return result;
    }

    @action async getcourselist(): Promise<any> {
        const result: any = await getcourselist();
        return result;
    }

    @action async getexamtype(): Promise<any> {
        const result: any = await getexamtype();
        return result;
    }

    @action async getIDlist(): Promise<any> {
        const result: any = await getIDlist();
        return result;
    }

    @action async getPorts(): Promise<any> {
        const result: any = await getPorts();
        return result;
    }



    @action async getuserlist(url: any): Promise<any> {
        const result: any = await getuserlist(url);
        return result;
    }

    // getUser
    @action async getUser(): Promise<any> {
        const result: any = await getUser();
        return result;
    }

    @action async getViews(): Promise<any> {
        const result: any = await getViews();
        return result;
    }

    @action async insertQuestionsType(params: any): Promise<any> {
        console.log(params)
        const result: any = await insertQuestionsType(params);
        return result;
    }

    @action async getmark(): Promise<any> {
        return await getmark();
    }

    @action async questionsType(): Promise<any> {
        const result: any = await questionsType();
        return result;
    }

    @action async questionUpdate(params: any): Promise<any> {
        const result: any = await questionUpdate(params);
        return result;
    }

    @action async getroom(): Promise<any> {
        return await getroom();
    }

    @action async getstudent(): Promise<any> {
        return await getstudent();
    }

    @action async subject(): Promise<any> {
        const result: any = await subject();
        return result;
    }

    @action async gradeRoom(params: any): Promise<any> {
        const result: any = await gradeRoom(params);
        return result;
    }

    // deleteGide
    @action async deleteGide(params: any): Promise<any> {
        const result: any = await deleteGide(params);
        return result;
    }

    // gradeUpdate
    @action async gradeUpdate(params: any): Promise<any> {
        const result: any = await gradeUpdate(params);
        return result;
    }

    // addClassRoom
    @action async addClassRoom(params: any): Promise<any> {
        const result: any = await addClassRoom(params);
        return result;
    }

    // deleteRoom
    @action async deleteRoom(params: any): Promise<any> {
        const result: any = await deleteRoom(params);
        return result;
    }

    // upLoadImg
    @action async upLoadImg(params: any): Promise<any> {
        const result: any = await upLoadImg(params);
        return result;
    }

    // deleteStudent
    @action async deleteStudent(params: any): Promise<any> {
        const result: any = await deleteStudent(params);
        return result;
    }
}

export default Question;