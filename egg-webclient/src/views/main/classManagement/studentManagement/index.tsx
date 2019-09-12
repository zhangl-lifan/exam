import * as React from 'react';
import { observer, inject } from 'mobx-react';
import {message} from "antd"
import './index.css';
import {
    Table
} from 'antd';

interface Prodsinfo {
    data: Array<object>;
    questionsType: any;
    key: any;
    addRoom: any;
    form: any;
    getroom: any;
    subject: any;
    gradeRoom: any;
    deleteGide: any;
    gradeUpdate: any;
    getstudent:any;
    deleteStudent:any
}

@inject(
    'addRoom',
    'getroom',
    'getstudent',
    'deleteStudent'
)
class StudentManagement extends React.Component<Prodsinfo> {

    state = {
        //  试题类型
        data: [],
        // visible: false,
        // confirmDirty: false,
        // autoCompleteResult: [],
        classRooms: [],
        studentList:[],
        // subjectList: [],
        // isShow: false,
        // room_id:'',
        // subject_id:'',
        // grade_id:''
         student_id:''
    };


    columns = [
        {
            title: '姓名',
            dataIndex: 'student_name',
            key: 'subject_id'
        },
        {
            title: '学号',
            dataIndex: 'student_id',
            key: 'student_id'
        },
        {
            title: '班级',
            dataIndex: 'grade_name',
            key: 'grade_name'
        },
        {
            title: '教室',
            dataIndex: 'room_text',
            key: 'room_id'
        },
        {
            title: '密码',
            dataIndex: 'student_pwd',
            key: 'student_pwd'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: any) => (
                <span>
                    <a onClick={()=>this.studentDelete(record)}>删除</a>
                </span>
            )
        }
    ];

    componentDidMount() {
        this.AddRoom();
        this.Getroom();
        this.Getstudent()
    }
   
    // 教室列表
    Getroom = async () => {
        const { getroom } = this.props.getroom;
        const result = await getroom();
        this.setState({
            classRooms: result.data
        });
    };


   //  班级列表 
    AddRoom = async () => {
        const { addRoom } = this.props.addRoom;
        const result = await addRoom();
        this.setState({
            data:result.data
        });
    };

    // 获取学生列表
    Getstudent =  async () => {
        const { getstudent } = this.props.getstudent;
        const result = await getstudent();
        // console.log(result.data)
        const studentList = result.data.map((item: any,index:any) => {
            return {
                key: index,
                grade_name: item.grade_name,
                room_text: item.room_text,
                student_name:item.student_name,
                student_id:item.student_id,
                student_pwd:item.student_pwd
            };
        });
        this.setState({
            studentList,
        });
    };
    

    // 删除学生的接口
    // {code: 1 ,msg: "删除成功"}
    DeleteStudents = async (params:any) => {
        const { deleteStudent } = this.props.deleteStudent;
        const result = await deleteStudent(params);
        console.log(result)
        if(result.code===1){
            message.success(result.msg);
            this.Getstudent()
        }else{
            message.error(result.msg)
        }
    };

    // 删除学生
    studentDelete = (record: any)=>{
         console.log(record.student_id)
         this.DeleteStudents(record.student_id)
    } 

    getStudentValue = (e:any) => {
        this.setState({
            student_id:e.target.value
        })

        
    };


    // 搜索学生
    searchStudent = ()=>{
        console.log(123)
    } 


   public render() {
       let {classRooms,data,studentList,student_id} = this.state;
       
        return (
            <div className="studentPage">
                <div className="student-header">
                    <span>学生管理</span>
                </div>
                <div className="student-search">
                    <div>
                        <input type="text" placeholder="输入学生姓名" value={student_id} onChange={this.getStudentValue}/>
                    </div>
                    <div>
                        <select>
                            {/* onChange={this.getSelectVal} */}
                            <option value="请输入教室号" >请输入教室号</option>
                            {classRooms &&
                                  classRooms.map((item: any) => {
                                    return (
                                     <option
                                        value={item.room_id}
                                         key={item.room_id}
                                       >
                                        {item.room_text}
                                      </option>
                                     );
                              })}
                        </select>
                    </div>
                    <div>
                        <select>
                                {/* onChange={this.getSelectVal} */}
                                <option value="班级名">班级名</option>
                                {data &&
                                    data.map((item: any) => {
                                        return (
                                        <option
                                            value={item.room_id}
                                            key={item.room_id}
                                        >
                                            {item.room_text}
                                        </option>
                                        );
                                })}
                            </select>
                    </div>
                    <div>
                        <button onClick={this.searchStudent}>搜索</button>
                    </div>
                    <div>
                        <button>重置</button>
                    </div>
                </div>
                <div className="student-content-box">
                     <Table columns={this.columns} dataSource={studentList} />
                </div>
            </div>
        );
    }
}

export default StudentManagement;
