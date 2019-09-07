/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 17:02:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-05 19:27:54
 */
import { action } from 'mobx';
import { getexamtype } from '../../service/getexamlist';

class Getexamtype {
    @action async getexamtype(): Promise<any>{
        const result: any = await getexamtype();
        return result;
    }
}

export default Getexamtype;