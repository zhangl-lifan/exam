/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 19:50:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-06 19:52:12
 */

import { action } from 'mobx';
import { getIDlist } from '../../service/userview';

class GetIDlist {
    @action async getIDlist(): Promise<any> {
        const result: any = await getIDlist();
        return result;
    }
}

export default GetIDlist;
