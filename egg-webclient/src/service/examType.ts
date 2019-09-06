

import request from '../utils/request';

// 获取所有的考试类型
export function examType() {
    return request.get('/exam/examType');
}

