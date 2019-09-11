/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-09 19:41:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-09 19:42:35
 */

import { action, observable } from 'mobx';
import { selectExam } from '../../service/createExam';

let parameter = {};
if (window.sessionStorage.getItem('params')) {
    parameter = JSON.parse(window.sessionStorage.getItem('params') + '')
    console.log(parameter);
}
// 引入mobx
class SelectExam {
    @observable saveparams: any = parameter;
    @action changeParams(obj: any): void {
        console.log('this...', obj);
        this.saveparams = obj;
    }

    @action async selectExam(params: any): Promise<any> {
        const result: any = await selectExam(params);
        return result;
    }
}

export default SelectExam;