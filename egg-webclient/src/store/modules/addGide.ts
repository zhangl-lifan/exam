// addRoom
import { action} from 'mobx';
import {addGide} from '../../service/index';

class AddGide{

    @action async addGide(): Promise<any>{
        const result: any = await addGide();
        return result;
    }
}

export default AddGide
   
    

