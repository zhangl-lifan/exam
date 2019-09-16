import {
    Select,
    Button,
    message
} from 'antd';
import '../index.css';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form';

interface Props {
    selectExam: any,
    createExam: any,
    match: any,
    updateExam: any,
    datalist: Array<object>
}
const success = () => {
    message.success('update exam succeed!');
};

const warning = () => {
    message.warning('update exam come to nothing!');
};
interface Props extends FormComponentProps {
    history: any,
    create:any
}

@inject('selectExam','create')
@observer

class UserDetails extends React.Component<Props> {

    state = {
        datalist: []
    }

    componentDidMount() {
        this.getselectExam();
    }

    getselectExam = async () => {
        const { questions } = this.props.create;
        this.setState({
            datalist: questions
        })
    }

    handleClick = async () => {
        const { updateExam } = this.props.create;
        const { saveparams } = this.props.selectExam;
        let arr: any = [];
        this.state.datalist.map((item: any) => arr.push(item.questions_id))
        let obj = {
            question_ids: JSON.stringify(arr.join(","))
        }
        const result = await updateExam(saveparams.examid, obj);
        //结果
        console.log(result);
        if (result.code === 1) {
            success();
               this.props.history.push('/main/examinations/listExaminations');
        } else {
            warning();
        }
    }

    render() {
        const { saveparams } = this.props.selectExam;
        const { datalist } = this.state;
        return (
            <div className='contt'>
                <h2 className='titleh2'>
                    创建试卷
           </h2>
                <div className="contents">
                    <Button className='addbtn'>添加新题</Button>
                    <div className="selectExams">
                        <h2>{saveparams.title}</h2>
                        <div className="title">
                            考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于
                        </div>
                        {
                            datalist && datalist.map((item: any, index: any) => {
                                return <div key={index} className='issue'>
                                    <p><b>{index += 1}:</b>{item.title}</p>
                                    <p>{item.questions_answer}</p   >
                                </div>
                            })
                        }
                        <Button className='createbtn' onClick={this.handleClick}>创建试卷</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails;