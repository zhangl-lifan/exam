/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 21:27:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-09 17:24:02
 */
import { action } from 'mobx';
import { getuserlist } from '../../service/getusers';

class Getuserlist {
    @action async getuserlist(url:any): Promise<any> {
        const result: any = await getuserlist(url);
        return result;
    }
}

export default Getuserlist;