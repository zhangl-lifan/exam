/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 10:08:51
 * @LastEditTime: 2019-09-07 10:09:30
 * @LastEditors: Please set LastEditors
 */
import {getstudent} from "../../service/student";
import {action} from 'mobx';
class Detail{
    @action async getstudent() :Promise<any>{
       return await getstudent();
    }
}
export default Detail;