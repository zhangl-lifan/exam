/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 11:03:56
 * @LastEditTime: 2019-09-07 15:22:05
 * @LastEditors: sueRimn
 */
import { getmark } from "../../service/marking";
import { action } from 'mobx';

class Mark {
    @action async getmark(): Promise<any> {
        const result: any = await getmark();
        return result;
    }
}
export default Mark;
