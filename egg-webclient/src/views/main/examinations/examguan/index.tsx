import {
    Select,
    Button,
    Radio,
    Table
} from 'antd';
import '../index.css';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
let { Option } = Select;
interface Props {
    getexamtype: any,
    getcourselist: any,
    form: any,
    selectExam: any,
    examtype: Array<object>,
    courlist: Array<object>,
    courstr: string,
    typestr: string,
    courId: any,
    typeId: any,
    examlist: Array<object>
}

@inject('getexamtype', "getcourselist", 'selectExam')
@observer

class ClassExam extends React.Component<Props> {
    state = {
        examtype: [],
        courlist: [],
        courstr: '',
        typestr: '',
        courId: '',
        typeId: '',
        examlist: []
    }

    componentDidMount() {
        this.getexamtypes();
        this.getcourdata();
        this.getSelectData()
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

    getSelectData = async (params?: any) => {
        const { selectExam } = this.props.selectExam;
        const result = await selectExam(params);
        console.log(result);
        result.exam.map((item: any, index: any) => {
            return item.key = index + 1
        })
        this.setState({
            examlist: result.exam
        })
    }

    handleClick = (e: any) => {
        const { examtype, courlist, courstr, typestr } = this.state;
        const courobj = courlist.filter((item: any) => {
            return item.subject_text === courstr;
        })
        const typeobj = examtype.filter((item: any) => {
            return item.exam_name === typestr;
        })
        courobj.forEach((item: any) => {
            this.setState({
                courId: item.subject_id
            })
        })
        typeobj.forEach((item: any) => {
            this.setState({
                typeId: item.exam_id
            }, () => {
                this.getSelectData({
                    exam_exam_id: this.state.typeId,
                    subject_id: this.state.courId
                })
            })
        })
    }

    courChange = (e: any) => {
        this.setState({
            courstr: e
        })
    }

    examTypeChange = (e: any) => {
        this.setState({
            typestr: e
        })
    }

    render() {
        const { courlist, examtype, examlist } = this.state;
        const columns = [
            {
                title: '试卷信息',
                dataIndex: 'title',
                key: 'data'
            },
            {
                title: '班级',
                dataIndex: 'grade_name',
                key: 'class',
                // render: (grade_name: any) => {
                //     return grade_name.map((item: any): void => {
                //         <p>
                //             {item}
                //         </p>
                //     })
                // }
            },
            {
                title: '创建人',
                dataIndex: 'user_name',
                key: 'createman',
            },
            {
                title: '开始时间',
                key: 'start_time',
                dataIndex: 'startTime'
            },
            {
                title: '结束时间',
                key: 'end_time',
                dataIndex: 'endTime'
            },
            {
                title: '操作',
                key: 'options',
                dataIndex: 'options',
                render: (text: any) => <a>{text}</a>,
            }
        ];
        return <div>
            <h2 className='titleh2'>
                试卷列表
               </h2>
            <div className="topbox">
                <div>
                    <span>考试类型：</span>
                    <Select style={{ width: 130 }} onChange={this.examTypeChange}>
                        {
                            examtype && examtype.map((item: any) => {
                                return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                            })
                        }

                    </Select>
                </div>
                <div>
                    <span>课程：</span>
                    <Select style={{ width: 130 }} onChange={this.courChange}>
                        {
                            courlist && courlist.map((item: any) => {
                                return <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <Button type="primary" className='addbtn' size='large' onClick={this.handleClick}>查询</Button>
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
                <Table columns={columns} dataSource={examlist} pagination={false} />
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