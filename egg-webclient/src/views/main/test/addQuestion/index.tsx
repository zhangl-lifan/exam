import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './index.css';

interface Listinfo {
    list: Array<object>;
    question: any;
    data: Array<object>;
    subject: any;
    questionsType: any;
    examType: any;
    key: any;
}

@inject('subject', 'examType', 'questionsType')
@observer
class AddQuestion extends React.Component<Listinfo> {
    state = {
        subjectList: [],
        // 考试类型
        examTypeList: [],
        //  试题类型
        questionsTypeList: []
    };

    constructor(props: any) {
        super(props);
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

    public render() {
        const { subjectList, examTypeList, questionsTypeList } = this.state;
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
                            />
                        </div>
                        <div className="exam-title">
                            <label title="题目主题">题目主题</label>
                            <div className="text-area"></div>
                        </div>
                        <div className="select-box">
                            <div>
                                <label title="请选择考试类型">
                                    请选择考试类型
                                </label>
                                <select name="" id="">
                                    {examTypeList &&
                                        examTypeList.map((item: any) => {
                                            return (
                                                <option
                                                    value=""
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
                                <select>
                                    {subjectList &&
                                        subjectList.map((item: any) => {
                                            return (
                                                <option
                                                    value=""
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
                                <select name="" id="">
                                    {questionsTypeList &&
                                        questionsTypeList.map((item: any) => {
                                            return (
                                                <option
                                                    value=""
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
                        <h3>题目信息</h3>
                        <div className="text-area"></div>
                    </div>
                    <div className="btn-box">
                          <button>提 交</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default AddQuestion;

