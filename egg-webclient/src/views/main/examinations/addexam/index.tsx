import { Form, Input, Select, Button, InputNumber, DatePicker } from 'antd';
import '../index.css';
import { inject, observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { Session } from 'inspector';
const { Option } = Select;

interface Props {
    form: any,
    getexamtype: any,
    getcourselist: any,
    examtype: Array<object>,
    subject: any,
    courlist: Array<object>,
    startValue: any,
    endValue: any,
    endOpen: boolean,
    subjectId: any,
    examID: any,
    selectExam: any,
    sessionStorage: any,
    createExam: any
}
interface Props extends FormComponentProps {
    history: any
}

@inject('getexamtype', "getcourselist", 'selectExam', 'createExam')
@observer
class RegistrationForm extends React.Component<Props> {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        examtype: [],
        courlist: [],
        startValue: undefined,
        endValue: undefined,
        endOpen: false,
        subjectId: undefined,
        examID: undefined
    };

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
            });
        }
    };

    getcourdata = async () => {
        const { getcourselist } = this.props.getcourselist;
        const result = await getcourselist();
        if (result.code === 1) {
            this.setState({
                courlist: result.data
            });
        }
    };
    handleSubmit = (e: any) => {
        const { startValue, endValue, subjectId, examID } = this.state;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: Error, values: any) => {
            if (!err) {
                let params = {
                    subject_id: subjectId,
                    exam_id: examID,
                    title: values.examName,
                    number: values.settopic,
                    start_time: this.deteToMs(startValue),
                    end_time: this.deteToMs(endValue)
                };
                this.createFun(params);
            }
        });
    };

    // 标准时间转换成时间戳
    deteToMs = (date: any) => {
        const result = new Date(date).getTime();
        return result;
    }

    createFun = async (params: any) => {
        const { createExam } = this.props.createExam;
        const result = await createExam(params);
        console.log(result);
        this.props.createExam.addQuestions(result.data.questions);
        window.sessionStorage.setItem('params', JSON.stringify(params));
        this.props.selectExam.changeParams(params);
        this.props.history.replace('/main/examinations/questions');
    }

    typeChange = (value: string) => {
        let { examtype } = this.state;
        let index = examtype.filter((item: any) => {
            return item.exam_name === value;
        });
        index.forEach((item: any) => {
            this.setState({
                examID: item.exam_id
            })
        })
    }

    courChange = (e: any) => {
        let { courlist } = this.state;
        let subid = courlist.filter((item: any) => {
            return item.subject_text === e;
        })

        subid.forEach((item: any) => {
            this.setState({
                subjectId: item.subject_id
            })
        })
    }

    TimeonChange = (field: any, value: any) => {
        this.setState({
            [field]: value
        });
    };

    onStartChange = (value: any) => {
        this.TimeonChange('startValue', value);
    };

    onEndChange = (value: any) => {
        this.TimeonChange('endValue', value);
    };

    handleEndOpenChange = (open: boolean) => {
        this.setState({ endOpen: open });
    };

    handleStartOpenChange = (open: boolean) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            examtype,
            courlist,
            startValue,
            endValue,
            endOpen
        } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };

        return (
            <div className="content">
                <h2 className="titleh2">添加考试</h2>
                <Form
                    {...formItemLayout}
                    onSubmit={this.handleSubmit}
                    className="form-top"
                >
                    <Form.Item label="试卷名称">
                        {getFieldDecorator('examName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your examName!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="选择考试类型">
                        {getFieldDecorator('type', {
                            rules: [{ required: true, message: 'Please select your exam type!' }],
                        })(<Select style={{ width: 100 }} onChange={this.typeChange}>
                            {
                                examtype && examtype.map((item: any) => {
                                    return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                                })
                            }
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="选择课程">
                        {getFieldDecorator('course', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your course!'
                                }
                            ]
                        })(
                            <Select
                                style={{ width: 130 }}
                                onChange={this.courChange}
                            >
                                {courlist &&
                                    courlist.map((item: any) => {
                                        return (
                                            <Option
                                                key={item.subject_id}
                                                value={item.subject_text}
                                            >
                                                {item.subject_text}
                                            </Option>
                                        );
                                    })}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="设置题量">
                        {getFieldDecorator('settopic', {
                            rules: [{ required: true, message: 'Please input your exam number!' }],
                        })(<InputNumber min={3} max={10} />)}
                    </Form.Item>
                    <Form.Item label="考试时间">
                        {getFieldDecorator('time')(<div>
                            <DatePicker
                                format="YYYY-MM-DD HH:mm:ss"
                                value={startValue}
                                onOpenChange={this.handleStartOpenChange}
                                placeholder="开始时间"
                                onChange={this.onStartChange}
                            />
                            <DatePicker
                                format="YYYY-MM-DD HH:mm:ss"
                                value={endValue}
                                placeholder="结束时间"
                                onChange={this.onEndChange}
                                onOpenChange={this.handleEndOpenChange}
                                open={endOpen}
                            />
                        </div>)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout} id="btn-submit-primary">
                        <Button type="primary" htmlType="submit">
                            添加试卷
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create()(RegistrationForm);
