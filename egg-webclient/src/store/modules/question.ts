import { observable, action } from 'mobx';
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
    getUser,
    getViews,
    insertQuestionsType,
    getmark,
    questionsType,
    questionUpdate,
    getroom,
    getstudent,
    subject,
    gradeRoom,
    deleteGide,
    gradeUpdate,
    addClassRoom,
    deleteRoom
} from '../../service/index';
import { getuserlist } from '../../service/getusers';
// 引入mobx
class Question {

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

    @action async getUser(): Promise<any> {
        const result: any = await getUser();
        return result;
    }

    @action async getuserlist(url: any): Promise<any> {
        const result: any = await getuserlist(url);
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

}

export default Question;