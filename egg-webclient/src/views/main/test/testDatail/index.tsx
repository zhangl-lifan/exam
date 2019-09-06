import * as React from 'react';
import { observer, inject } from 'mobx-react';
import "./index.css"

interface Datailinfo {
    list: Array<object>;
    question: any;
    data: Array<object>;
    subject: any;
    questionsType:any;
    examType:any,
    history:any,
    location:any
}

@inject()
@observer

class TestDatail extends React.Component<Datailinfo> {

   state = {
      list: [],
      subjectList: [],
      // 考试类型
      examTypeList:[],
      //  试题类型
      questionsTypeList:[],
  };

  constructor(props: any) {
      super(props);
  }

  componentDidMount() {
      this.getExamType();
  }


  // 获取考试类型的数据
  getExamType = async () => {
      // const { examType } = this.props.examType;
      // const result = await examType();
      // console.log("getExamType",result);
      // // {exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i", exam_name: "周考1"}
      // this.setState({
      //     examTypeList: result.data
      // });
  };

    public render() {
      
       let {item} = this.props.location.state
        console.log(item)
        return (
         <div className="DatailPage">
         <header className="header">试题详情</header>
         <main className="drop-content">
              <div className="content-left">
                  <div className="title-author">
                      <p>出题人: {item.user_name}</p>
                  </div>
                  <div className="title-messsge">
                      <h3>题目信息</h3>
                      <div className="mesge-box">
                        <span>
                              {item.questions_type_text}
                        </span>
                        <span>{item.subject_text}</span>
                        <span>{item.exam_name}</span>
                      </div>
                  </div>
                  <div className="test-question">
                       <h4>{item.title}</h4>
                       <div className="test-content">{item.questions_stem.slice(0,65)}</div>
                       <div className="test-content">{item.questions_stem.slice(66,148)}</div>
                  </div>
              </div>
              <div className="content-right"></div>
         </main>
     </div>
        )
    }
}

export default TestDatail;




