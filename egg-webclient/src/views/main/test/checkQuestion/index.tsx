import * as React from 'react';
import {observer, inject} from 'mobx-react';
import "./index.css"
import { listenerCount } from 'cluster';

interface Listinfo{
    list:Array<object>,
    question:any,
    data:Array<object>
}

// sumbject
@inject('question')
@observer

class CheckQuestion extends React.Component<Listinfo> {
    
    state = {
        list:[]
    }

    constructor(props: any){
        super(props);
        // sumbject().then((res:any)=>{
        //     const subject = res.data
        //     console.log(res.data)
        // })
    }

    

    componentDidMount(){
        this.getQuestion()
    }
   getQuestion=async ()=>{
        const {question} = this.props.question;
        const result = await question();
        this.setState({
            list:result.data
        })
    }

    public render() {
        console.log(this.state.list)
        const {list} = this.state

        return (
            <div className="conentPage">
                <header className="header">查看试卷</header>
                <div className="subjectBox">

                </div>
                <main className="main">
                    <ul className="list-subject-item">
                         {
                               list&&list.map((item:any)=>{
                                  return <li key={item.questions_id}>
                                      <div>
                                          <span>{item.title}</span>
                                      </div>
                                      <div>
                                          <p>
                                              <span>{item.questions_type_text}</span>
                                              <span>{item.subject_text}</span>
                                              <span>{item.exam_name}</span>
                                          </p>
                                          <p>
                                              <span>编辑</span>
                                          </p>
                                      </div>
                                      <div>
                                          <span>{item.user_name}发布</span>
                                      </div>
                                  </li>
                               })
                         }
                    </ul>
                </main>
            </div>
            
        )
    }

    
}

export default CheckQuestion;