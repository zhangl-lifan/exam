/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-09 14:19:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 08:49:32
 */

import { observable, action } from 'mobx';
import { deleteStudent,addGide,addRoom,getclasslist,getroom,getstudent,gradeRoom,deleteGide,gradeUpdate,addClassRoom,deleteRoom } from '../../service/index';


class ClassRoom {
    
    // 添加班级
    @action async addGide(): Promise<any> {
        const result: any = await addGide();
        return result;
    }

    // 添加教室
    @action async addRoom(): Promise<any> {
        const result: any = await addRoom();
        return result;
    }

    // 班级列表
    @action async getclasslist(): Promise<any> {
        const result: any = await getclasslist();
        return result;
    }

    // 获取所有的班级
    @action async getroom(): Promise<any> {
        return await getroom();
    }

    // 获取所有的学生
    @action async getstudent(): Promise<any> {
        return await getstudent();
    }

    // 添加班级
    @action async gradeRoom(params: any): Promise<any> {
        const result: any = await gradeRoom(params);
        return result;
    }

    // 删除班级
    @action async deleteGide(params: any): Promise<any> {
        const result: any = await deleteGide(params);
        return result;
    }

    // 更新班级
    @action async gradeUpdate(params: any): Promise<any> {
        const result: any = await gradeUpdate(params);
        return result;
    }

    // 添加教室
    @action async addClassRoom(params: any): Promise<any> {
        const result: any = await addClassRoom(params);
        return result;
    }

    // 删除教室
    @action async deleteRoom(params: any): Promise<any> {
        const result: any = await deleteRoom(params);
        return result;
    }

    // 删除学生
    @action async deleteStudent(params: any): Promise<any> {
        const result: any = await deleteStudent(params);
        return result;
    }

}

export default ClassRoom;