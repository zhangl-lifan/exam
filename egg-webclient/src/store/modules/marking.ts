/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 11:03:56
 * @LastEditTime: 2019-09-06 11:18:35
 * @LastEditors: Please set LastEditors
 */
import {getmark} from "../../service/marking";
import {action} from 'mobx';
class Mark{
    @action async getmark() :Promise<any>{
       return await getmark();
    }
}
export default Mark;
