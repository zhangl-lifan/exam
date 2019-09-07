/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-06 19:50:52
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-06 19:51:54
 */
import { action } from 'mobx';
import { getPorts } from '../../service/userview';

class GetPorts {
    @action async getPorts(): Promise<any> {
        const result: any = await getPorts();
        return result;
    }
}

export default GetPorts;