
import { action } from 'mobx';
import { updateExam } from '../../service/createExam';

// 引入mobx

class UpdateExam {
    @action async updateExam(id: any, params: any): Promise<any> {
        const result: any = await updateExam(id, params);
        return result;
    }
}

export default UpdateExam;