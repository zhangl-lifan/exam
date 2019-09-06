// QuestionsType
import request from '../utils/request';

// 获取所有的试题类型
export let questionsType = ()=>{
    return request.get('/exam/getQuestionsType');
}
