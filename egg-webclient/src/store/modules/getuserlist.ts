/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 21:27:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-07 08:48:10
 */
import { action } from 'mobx';
import { getuserlist } from '../../service/getusers';

class Getuserlist {
    @action async getuserlist(): Promise<any> {
        const result: any = await getuserlist();
        return result;
    }
}

export default Getuserlist;