import {getroom} from "../../service/room";
import {action} from 'mobx';
class Room{
    @action async getroom() :Promise<any>{
       return await getroom();
    }
}
export default Room;