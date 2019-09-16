import {
    Select,
    Button,
    Radio,
    Table,
} from 'antd';
import '../index.css';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
let { Option } = Select;
let { Column } = Table;
interface Props {
    getexamtype: any,
    getcourselist: any,
    form: any,
    selectExam: any,
    question:any,
    examtype: Array<object>,
    courlist: Array<object>,
    courstr: string,
    typestr: string,
    courId: any,
    typeId: any,
    getFullYear: any,
    examlist: Array<object>
}

@inject('question', 'selectExam')
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
        const { getexamtype } = this.props.question;
        const result = await getexamtype();
        if (result.code === 1) {
            this.setState({
                examtype: result.data
            })
        }
    }

    getcourdata = async () => {
        const { getcourselist } = this.props.question;
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
        result.exam.map((item: any, index: any) => {
            return item.key = index + 1
        })
        result.exam.map((item: any) => {
            return item.start_time = this.timetransition(item.start_time)
        })
        result.exam.map((item: any) => {
            return item.end_time = this.timetransition(item.end_time)
        })
        result.exam.map((item: any) => {
            return item.options = '详情'
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

    timetransition = (time: any) => {
        let times = Number(time);
        let year = new Date(times).getFullYear();
        let month = new Date(times).getMonth() + 1;
        let date = new Date(times).getDate();
        let hour = new Date(times).getHours();
        let minute = new Date(times).getMinutes();
        let second = new Date(times).getSeconds();
        return year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second;
    }

    render() {
        const { courlist, examtype, examlist } = this.state;
        console.log(examlist);
        const columns = [
            {
                title: '试卷信息',
                dataIndex: 'title',
                key: 'data'
            },
            {
                title: '班级',
                dataIndex: 'grade_name',
                key: 'class'
            },
            {
                title: '创建人',
                dataIndex: 'user_name',
                key: 'createman',
            },
            {
                title: '开始时间',
                key: "startTime",
                dataIndex: "start_time"
            },
            {
                title: '结束时间',
                key: "endTime",
                dataIndex: "end_time"
            },
            {
                title: '操作',
                dataIndex: 'options',
                render: (test: any, ) => {
                    return <span>
                        <a href='/main/examinations/questions'>{test}</a>
                    </span>
                }
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
                        <Radio.Group size='large' style={{ marginLeft: '40%' }}>
                            <Radio.Button value="add">全部</Radio.Button>
                            <Radio.Button value="underway">进行中</Radio.Button>
                            <Radio.Button value="end">已结束</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <Table columns={columns} dataSource={examlist} pagination={false} >
                </Table>
            </div>
        </div >
    }
}

export default ClassExam;