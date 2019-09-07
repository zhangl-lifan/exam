/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 19:38:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-06 20:10:39
 */
import { action } from 'mobx';
import { getViews } from '../../service/userview';

class GetViews {
    @action async getViews(): Promise<any> {
        const result: any = await getViews();
        return result;
    }
}

export default GetViews
