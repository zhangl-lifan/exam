
import * as React from 'react';
import {inject,observer} from 'mobx-react'
import { Select } from 'antd';

const { Option } = Select;
interface Props{
    props:any,
    page:any,
    classRoom:any
}
@inject('classRoom')
@observer
class Management extends React.Component<Props>{
    constructor(props:any){
        super(props);
        // 不要在这里调用 this.setState()
        this.state = {
         list:[],
         newlist:[]
        }  
    }
    public render() {
        const {list,newlist}:any=this.state;
        const defaultval=newlist.length?newlist[0].room_text:'';
       
        return (
            <div> 
               {
                   <Select defaultValue={defaultval} style={{ width: 120 }}>
                    {
                        newlist.map((item:any,index:number)=>(
                            <Option key={index} value={item.room_text}>{item.room_text}</Option>
                        ))
                    }
                  
                   
                 </Select>
               }
              {
                  list.map((item:any,index:number)=>(
                      <p key={index}>{item.student_name}</p>
                  ))
              }
            </div>
        )
    }
    componentDidMount(){
       let list:any=[];
       let newlist=[];
        this.props.classRoom.getstudent().then((res:any)=>{
            if(res.code===1){
                list=res.data.splice(0,10);  
                this.setState({list})  
            }
        })
        this.props.classRoom.getroom().then((res:any)=>{
            if(res.code===1){
                newlist=res.data;
               this.setState({newlist})
            }
        })
       
    }
}

export default Management;