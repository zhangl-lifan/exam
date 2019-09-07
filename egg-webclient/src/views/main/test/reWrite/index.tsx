import * as React from 'react';
import { observer, inject } from 'mobx-react';
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
    getUser:any;
    addQuestions:any,
    location:any,
    questionUpdate:any
}

@inject('subject', 'examType', 'questionsType','addQuestions','getUser',"questionUpdate")
@observer
class RiWite extends React.Component<Listinfo> {

    // let {item} = this.props.location.state

    state = {
        subjectList: [],
        // 考试类型
        examTypeList: [],
        //  试题类型
        questionsTypeList: [],
        exam_id:'',
        questions_type_id:'',
        subject_id:'',
        title:this.props.location.state.item.title,
        questions_stem:this.props.location.state.item.questions_stem,
        questions_answer:this.props.location.state.item.questions_answer,
        user_id:'',
        questions_id:this.props.location.state.item.questions_id
    };

    constructor(props: any) {
        super(props);
        console.log(props)
    }

    componentDidMount() {
        this.getSubject();
        this.getExamType();
        this.getQuestionsType();
    }

    getSubject = async () => {
        const { subject } = this.props.subject;
        const result = await subject();
        this.setState({
            subjectList: result.data
        });
    };

    // 获取考试类型的数据
    getExamType = async () => {
        const { examType } = this.props.examType;
        const result = await examType();
        // {exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i", exam_name: "周考1"}
        this.setState({
            examTypeList: result.data
        });
    };

    // 获取考试类型的数据
    getQuestionsType = async () => {
        const { questionsType } = this.props.questionsType;
        const result = await questionsType();
        // {questions_type_id: "774318-730z8m", questions_type_text: "简答题", questions_type_sort: 1}
        this.setState({
            questionsTypeList: result.data
        });
    };


    questionUpdate = async (parmas:any) => {
        const { questionUpdate } = this.props.questionUpdate;
        const result = await questionUpdate(parmas);
         // user_id: "w6l6n-cbvl6s"
         // user_name: "chenmanjie"
    };

    // 编辑工具方法
    handleChange = (value: any) => {
        this.setState({
            questions_stem:value
        });
    };

    // 编辑答案
    handleAnswer = (value: any) => {
        this.setState({
            questions_answer:value
        });
    };

    // 试卷标题
    questTitle= (e:any) => {
        this.setState({
            title:e.target.value
        });
    }

    // 考试类型
    examTypeValue= (e:any) => {
        this.setState({
            exam_id: e.target.value
        });
    }

    // 课程类型
    subjectValue= (e: any) => {
        this.setState({
            subject_id: e.target.value
        });
    }

    // 题目类型
    questionsTypeValue= (e: any) => {
        this.setState({
            questions_type_id: e.target.value
        });
    }

    // 添加试题的提交
    submitClick = ()=> {
        let {questions_id} = this.state;
        // console.log(this.state)

        this.questionUpdate(questions_id)
    }

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
                <header className="header">编辑试题</header>
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
                                <select onChange ={this.examTypeValue}>
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
                                    {questionsTypeList &&
                                        questionsTypeList.map((item: any) => {
                                            return (
                                                <option
                                                    value={item.questions_type_id}
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
                        <button onClick={this.submitClick}>提 交</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default RiWite;
