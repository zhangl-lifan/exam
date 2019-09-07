import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './index.css';

interface Listinfo {
    list: Array<object>;
    question: any;
    data: Array<object>;
    subject: any;
    questionsType:any;
    examType:any,
    history:any
}

@inject('question', 'subject',"examType","questionsType")
@observer
class CheckQuestion extends React.Component<Listinfo> {
    state = {
        list: [],
        subjectList: [],
        // 考试类型
        examTypeList:[],
        //  试题类型
        questionsTypeList:[]
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.getQuestion();
        this.getSubject();
        this.getExamType();
        this.getQuestionsType()
    }

    getQuestion = async () => {
        const { question } = this.props.question;
        const result = await question();
        this.setState({
            list: result.data
        });
    };

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
        console.log("getExamType",result);
        // {exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i", exam_name: "周考1"}
        this.setState({
            examTypeList: result.data
        });
    };
     
     // 获取考试类型的数据
     getQuestionsType= async () => {
        const { questionsType } = this.props.questionsType;
        const result = await questionsType();
        console.log("getQuestionsType",result);
        // {questions_type_id: "774318-730z8m", questions_type_text: "简答题", questions_type_sort: 1}
        this.setState({
            questionsTypeList: result.data
        });
    };
     
    // 跳详情
    dropDatil = (id:any,item:any)=>{
        //   console.log(id);
          this.props.history.push({pathname:"/main/test/testDatail",state:{id,item}})
          
    }

    // 编辑数据
    reWriteFn(id:any,item:any){
        console.log(item)
        this.props.history.push({pathname:"/main/test/reWrite",state:{id,item}})
    }

    public render() {
        const { list, subjectList,examTypeList,questionsTypeList } = this.state;

        return (
            <div className="conentPage">
                <header className="header">查看试卷</header>
                <div className="subjectBox">
                    <div className="ant-form-horizontal">
                        <div className="cont-subject">
                            <div className="subject-list-item">
                                <div className="ant-row">
                                    <div className="row">
                                        <div className="ant-row ant-form-item">
                                            <div className="ant-col-2 ant-form-item-label">
                                                <label title="课程类型">
                                                    课程类型
                                                </label>
                                            </div>
                                            <div className="ant-col-22 ant-form-item-control-wrapper">
                                                <div className="ant-form-item-control">
                                                    <span className="ant-form-item-children">
                                                        <div className="item-children">
                                                            {subjectList &&
                                                                subjectList.map(
                                                                    (
                                                                        item: any
                                                                    ) => {
                                                                        return (
                                                                            <div
                                                                                className="ant-tag ant-tag-checkable"
                                                                                key={
                                                                                    item.subject_id
                                                                                }
                                                                            >
                                                                                {
                                                                                    item.subject_text
                                                                                }
                                                                            </div>
                                                                        );
                                                                    }
                                                                )}
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="subject-select">
                                <div className="shblist">
                                    <div>
                                        <span>考试类型</span>
                                        <select name="" id="">
                                           <option value=""></option>
                                            {
                                                examTypeList&&examTypeList.map((item:any)=>{
                                                    return <option value="" key={item.exam_id}>{item.exam_name}</option>
                                                })
                                            }
                                            
                                        </select>
                                    </div>
                                    <div>
                                        <span>题目类型</span>
                                        <select name="" id="">
                                            <option value=""></option>
                                        {
                                                questionsTypeList&&questionsTypeList.map((item:any)=>{
                                                    return <option value="" key={item.questions_type_id}>{item.questions_type_text}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <button>查询</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="main">
                    <ul className="list-subject-item">
                        {list &&
                            list.map((item: any) => {
                                return (
                                    <li key={item.questions_id}>
                                        <div>
                                            <span>{item.title}</span>
                                        </div>
                                        <div  >
                                            <p onClick={this.dropDatil.bind(this,item.questions_id,item)}> 
                                                <span>
                                                    {item.questions_type_text}
                                                </span>
                                                <span>{item.subject_text}</span>
                                                <span>{item.exam_name}</span>
                                            </p>
                                            <span className="write-box" onClick={this.reWriteFn.bind(this,item.questions_id,item)}>编辑</span>
                                        </div>
                                        
                                        <div>
                                            <span>{item.user_name}发布</span>
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </main>
            </div>
        );
    }
}

export default CheckQuestion;
