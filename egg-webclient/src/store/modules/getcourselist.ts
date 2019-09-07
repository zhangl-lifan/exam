/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-05 19:31:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-06 19:59:46
 */
import { action } from 'mobx';

import { getcourselist } from '../../service/getexamlist';

class Getcourselist {
    @action async getcourselist(): Promise<any> {
        const result: any = await getcourselist();
        return result;
    }
}

export default Getcourselist;