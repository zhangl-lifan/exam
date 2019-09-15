import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { message, Modal, Button } from 'antd';
import Editor from 'for-editor';
import './index.css';

interface Listinfo {
    list: Array<object>;
    question: any;
    data: Array<object>;
    subject: any;
    questionsType: any;
    examType: any;
    key: any;
    getUser: any;
    addQuestions: any;
}

@inject('subject', 'examType', 'questionsType', 'addQuestions', 'getUser')
class AddQuestion extends React.Component<Listinfo> {
    state = {
        // 课程类型
        subjectList: [],
        // 考试类型
        examTypeList: [],
        //  试题类型
        questionsTypeList: [],
        exam_id: '',
        questions_type_id: '',
        subject_id: '',
        title: '',
        questions_stem: '',
        questions_answer: '',
        user_id: ''
    };

    componentDidMount() {
        this.getSubject();
        this.getExamType();
        this.getQuestionsType();
        this.getUser();
    }

    // 获取所有的课程的数据
    // {subject_id: "4pu32-vs796l"  subject_text: "node基础"}

    getSubject = async () => {
        const { subject } = this.props.subject;
        const result = await subject();
        this.setState({
            subjectList: result.data
        });
    };

    // 获取考试类型的数据
    // {exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i", exam_name: "周考1"}

    getExamType = async () => {
        const { examType } = this.props.examType;
        const result = await examType();
        this.setState({
            examTypeList: result.data
        });
    };

    // 获取所有的试题类型
    // {questions_type_id: "774318-730z8m", questions_type_text: "简答题", questions_type_sort: 1}

    getQuestionsType = async () => {
        const { questionsType } = this.props.questionsType;
        const result = await questionsType();
        this.setState({
            questionsTypeList: result.data
        });
    };

    // 获取当前用户
    // {user_id: "w6l6n-cbvl6s",user_name: "chenmanjie"}
    getUser = async () => {
        const { getUser } = this.props.getUser;
        const result = await getUser();
        this.setState({
            user_id: result.data.user_id
        });
    };

    // 试题的标题
    questTitle = (e: any) => {
        this.setState({
            title: e.target.value
        });
    };

    // 编辑题干方法
    handleChange = (value: any) => {
        this.setState({
            questions_stem: value
        });
    };

    // 编辑答案方法
    handleAnswer = (value: any) => {
        this.setState({
            questions_answer: value
        });
    };

    // 考试类型
    examTypeValue = (e: any) => {
        this.setState({
            exam_id: e.target.value
        });
    };

    // 课程类型
    subjectValue = (e: any) => {
        this.setState({
            subject_id: e.target.value
        });
    };

    // 题目类型
    questionsTypeValue = (e: any) => {
        this.setState({
            questions_type_id: e.target.value
        });
    };

    // 添加试题
    // 返回结果 {code: 1, msg: "试题添加成功"}
    addQuestions = async (parmas: any) => {
        const { addQuestions } = this.props.addQuestions;
        const result = await addQuestions(parmas);
        console.log(result)
        message.success(result.msg);
    };

    // 添加试题的提交
    confirm = (e: any) => {
        let that = this;
        Modal.confirm({
            title: '你确定要添加这道试题吗?',
            content: '真的要添加吗？',
            okText: '确认',
            cancelText: '取消',

            onOk() {
                let {
                    questions_type_id, // 试题类型id
                    subject_id, // 课程id
                    exam_id, // 考试类型id
                    questions_answer, // 题目答案
                    title, // 试题的标题
                    questions_stem, // 题干
                    user_id // 用户id
                } = that.state;

                let obj = {
                    questions_type_id,
                    subject_id,
                    exam_id,
                    questions_answer,
                    title,
                    questions_stem,
                    user_id
                };

                if(obj.questions_type_id!==""&&obj.subject_id!==""&&obj.exam_id!==""&&obj.questions_answer!==""&&obj.title!==""&&obj.questions_stem!==""&&obj.user_id!==""){
                    that.addQuestions(obj);
                    that.success("试题添加成功！！！")
                }else{

                    that.success("参数验证失败！！！")
                }
            },
            onCancel() {
                console.log('Cancel');
            }
        });
    };

    // 成功后的状态
    success = (msg:any) => {
        let that = this;
        Modal.success({
            content: msg,
            okText:"知道了！"
        });
    };

    public render() {
        const {
            subjectList,
            examTypeList,
            questionsTypeList,
            title,
            questions_stem,
            questions_answer
        } = this.state;
        return (
            <div className="addPage">
                <header className="header">添加试题</header>
                <main className="add-content">
                    <div className="ti-type-box">
                        <h3>题目信息</h3>
                        <div>
                            <label title="题干">题干</label>
                            <input
                                className="antds-input"
                                type="text"
                                placeholder="请输入题目标题，不超过20个字"
                                value={title}
                                onChange={this.questTitle}
                            />
                        </div>
                        <div className="exam-title">
                            <label title="题目主题">题目主题</label>
                            <div className="text-area">
                                <Editor
                                    value={questions_stem}
                                    height="400px"
                                    placeholder="请输入内容..."
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="select-box">
                            <div>
                                <label title="请选择考试类型">
                                    请选择考试类型
                                </label>
                                <select onChange={this.examTypeValue}>
                                    <option value="">请选择</option>
                                    {examTypeList &&
                                        examTypeList.map((item: any) => {
                                            return (
                                                <option
                                                    value={item.exam_id}
                                                    key={item.exam_id}
                                                >
                                                    {item.exam_name}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div>
                                <label title="请选择课程">请选择课程</label>
                                <select onChange={this.subjectValue}>
                                    <option value="">请选择</option>
                                    {subjectList &&
                                        subjectList.map((item: any) => {
                                            return (
                                                <option
                                                    value={item.subject_id}
                                                    key={item.subject_id}
                                                >
                                                    {item.subject_text}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div>
                                <label title="请选择题目类型">
                                    请选择题目类型
                                </label>
                                <select onChange={this.questionsTypeValue}>
                                    <option value="">请选择</option>
                                    {questionsTypeList &&
                                        questionsTypeList.map((item: any) => {
                                            return (
                                                <option
                                                    value={
                                                        item.questions_type_id
                                                    }
                                                    key={item.questions_type_id}
                                                >
                                                    {item.questions_type_text}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="answer-type-box">
                        <h3>答案信息</h3>
                        <div className="text-area">
                            <Editor
                                value={questions_answer}
                                height="400px"
                                placeholder="请输入内容..."
                                onChange={this.handleAnswer}
                            ></Editor>
                        </div>
                    </div>
                    <div className="btn-box">
                        <Button type="primary" onClick={this.confirm}>
                            提 交
                        </Button>
                    </div>
                </main>
            </div>
        );
    }
}

export default AddQuestion;
