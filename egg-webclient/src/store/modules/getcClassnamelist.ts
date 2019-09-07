/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 20:56:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-05 21:01:38
 */
import { action } from 'mobx';

import { getclasslist } from '../../service/getclasslist';

class GetclassList {
    @action async getclasslist(): Promise<any> {
        const result: any = await getclasslist();
        return result;
    }
}

export default GetclassList;