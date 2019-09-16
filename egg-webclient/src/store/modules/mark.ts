/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:16:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-12 08:51:52
 */
import { observable, action } from 'mobx';
import {getmark} from '../../service/index';


class Mark {
    @action async getmark(): Promise<any> {
        return await getmark();
    }

}

export default Mark;