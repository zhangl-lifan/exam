
import { action } from 'mobx';
import { updateExam } from '../../service/createExam';

// 引入mobx

class UpdateExam {
    @action async updateExam(params:any): Promise<any> {
        const result: any = await updateExam(params);
        return result;
    }
}

export default UpdateExam;