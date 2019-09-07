import {
    Form,
    Input,
    Select,
    Button,
    InputNumber,
    Radio
} from 'antd';
import '../index.css';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
let { Option } = Select;
interface Props {
    getexamtype: any,
    getcourselist: any,
    form: any,
    examtype: Array<object>,
    courlist: Array<object>
}


@inject('getexamtype', "getcourselist")
@observer

class ClassExam extends React.Component<Props> {
    state = {
        examtype: [],
        courlist: [],
    }
    componentDidMount() {
        this.getexamtypes();
        this.getcourdata();
    }

    getexamtypes = async () => {
        const { getexamtype } = this.props.getexamtype;
        const result = await getexamtype();
        if (result.code === 1) {
            this.setState({
                examtype: result.data
            })
        }
    }


    getcourdata = async () => {
        const { getcourselist } = this.props.getcourselist;
        const result = await getcourselist();
        if (result.code === 1) {
            this.setState({
                courlist: result.data
            })
        }
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        const { courlist, examtype } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return <div>
            <h2 className='titleh2'>
                试卷列表
               </h2>
            <div className="topbox">
                <div>
                    <span>考试类型：</span>
                    <Select style={{ width: 130 }}>
                        {
                            examtype && examtype.map((item: any) => {
                                return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                            })
                        }

                    </Select>
                </div>
                <div>
                    <span>课程：</span>
                    <Select style={{ width: 130 }}>
                        {
                            courlist && courlist.map((item: any) => {
                                return <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <Button type="primary" className='addbtn' size='large'>查询</Button>
                </div>
            </div>
            <div className="bottbox">
                <div className="toplist">
                    <div>
                    <h4>考试列表</h4>
                    <Radio.Group size='large'>
                            <Radio.Button value="add">全部</Radio.Button>
                            <Radio.Button value="underway">进行中</Radio.Button>
                            <Radio.Button value="end">已结束</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <ul className='contenttitle'>
                        <li className='titleone'>
                            <p className='classname'>试卷信息</p>
                            <p className='coursename'>班级</p>
                            <p className='root'>创建人</p>
                            <p className='operation'>开始时间</p>
                            <p className='operation'>结束时间</p>
                            <p className='operation'>操作</p>
                        </li>
                    </ul>
            </div>
        </div>
    }
}

export default ClassExam;