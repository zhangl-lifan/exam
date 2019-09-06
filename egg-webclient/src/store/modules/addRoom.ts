// addRoom
import { action} from 'mobx';
import {addRoom,addGide} from '../../service/index';

// 引入mobx
class AddRoom{

    @action async addRoom(): Promise<any>{
        const result: any = await addRoom();
        return result;
    }
}


export default AddRoom

// 