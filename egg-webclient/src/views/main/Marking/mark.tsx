import * as React from 'react';
import { Pagination } from 'antd';
import './index.css'
import { inject, observer } from 'mobx-react';

interface Props{
  props:any,
  mark:any,
  state:any,
  obj:any,
  history:any
}
@inject('mark')
@observer
class Marking extends React.Component<Props>{
  
  constructor(props:any){
    super(props);
    // 不要在这里调用 this.setState()
    this.state = {
     num:0,
      obj:{},
      newarr:[]
    };
    
  }
    public render() {
        
      const {newarr,num,obj}:any=this.state;
     
      return (
            <div className="marking-apge">
              <table>
                <tbody>
              <tr><th>班级</th><th>考试类型</th><th>考试题目</th><th>状态</th></tr>
       {newarr.map((item:any,index:number)=>{
          return <tr key={index}><th>{item}</th><th>{obj.exam_name}</th><th>{obj.subject_text}</th><th onClick={
              ()=>{
                  this.props.history.push('/main/marking/detail')
              }
          }>{obj.status===3?'已批卷':'未批卷'}</th></tr>
        })
      
      }</tbody>
     </table>
              <Pagination size="small" total={num} showSizeChanger={true}  showQuickJumper={true} onShowSizeChange={(current,size)=>{
                  const newobj:any=this.state;
                  const arr=newobj.obj.grade_name;
                  const list=Object.create(arr).splice((current-1)*size,size);
                  this.setState({newarr:list});
                  
                }} onChange={(page,pageSize:number)=>{
                  const newobj:any=this.state;
                  const arr=newobj.obj.grade_name;
                  const list=Object.create(arr).splice((page-1)*pageSize,pageSize);
                  this.setState({newarr:list});
                 
                   
              }}/>
            </div>
        )
    }

    componentDidMount(){
      const result=this.props.mark.getmark();
      result.then((res:any)=>{
      
        if(res.code===1){
          const arr=res.exam[0].grade_name;
          // for(let i =2;i<33;i++){
          //  arr.push(i);
          // }
         this.setState({num:arr.length});
          const newarr=Object.create(arr).splice(0,10);
          this.setState({newarr});
          this.setState({obj:{exam_name:res.exam[0].exam_name,grade_name:arr,subject_text:res.exam[0].subject_text,status:res.exam[0].status}});
          
          
        }
      })
    
      
     }
}

export default Marking;