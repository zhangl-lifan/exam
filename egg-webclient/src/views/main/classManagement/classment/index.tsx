// classment
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Button, Modal, Form, Input,message } from 'antd';
import './index.css';

interface ClassRoominfo {
    data: Array<object>;
    questionsType: any;
    key: any;
    addGide:any;
    addClassRoom:any;
    form:any;
    deleteRoom:any;
}

@inject('addGide','addClassRoom','deleteRoom')
@observer

class Classment extends React.Component<ClassRoominfo> {

    state = {
        //  试题类型
        data: [],
        visiblest:false,
        RoomName:'',
        
    };


    columns = [
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text:any, record:any) => (
              <span>
                <a onClick={()=>this.deleteRoomFn(record)}>删除</a>
              </span>
            ),
          },
    ];


    componentDidMount() {
        this.AddGide();
    }

    // 获取考试类型的数据
    AddGide = async () => {
        console.log(this.props)
        const { addGide } = this.props.addGide;
        const result = await addGide();
        const data = result.data.map((item: any) => {
            return {
                key: item.room_id,
                room_text: item.room_text,
            };
        });
        this.setState({
            data
        });
    };

    // 点击按钮
    addRooms =()=>{
        this.setState({
            visiblest: true
        });
    }

    // 弹框添加确认
    handleAddOk = (e:any)=>{
        this.props.form.validateFields((err: Error, values: any) => {
            if (err) {
                return;
            }
            //检查Form表单填写的数据是否满足rules的要求
            let optRoom = {
                room_text: values.RoomName,
            };

            this.AddClassRoom(optRoom)
            this.setState({
                visiblest: false,
            });

            values.RoomName = ''
        });
    }

    // 弹框取消
    handleAddCancel = ()=>{
        this.setState({
            visiblest: false,
            RoomName: ''
        });
    }
    // 添加教室的接口
    AddClassRoom = async (params:any) => {
        const { addClassRoom } = this.props.addClassRoom;
        const result = await addClassRoom(params);
       if (result.code === 1) {
            message.success(result.msg);
            this.AddGide();
        }
    };

    // 删除教室的接口
    DeleteRoom = async (params:any) => {
        const { deleteRoom } = this.props.deleteRoom;
        const result = await deleteRoom(params);
        if (result.code === 1) {
            message.success(result.msg);
            this.AddGide();
        }
    };

    // 删除教室的点击
    deleteRoomFn = (record:any)=>{
        this.DeleteRoom({room_id:record.key})
    }

    public render() {
        const { data } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            
            <div className="TypePage-class">
            <header className="header-class">教室管理</header>
            <main className="type-content-class">
                <div className="btn-class-add">
                    <Button type="primary" icon="plus" className="class-ads-btn" onClick={this.addRooms}>
                         添加教室
                    </Button>
                    <Modal
                            title="创建新类型"
                            visible={this.state.visiblest}
                            onOk={this.handleAddOk}
                            onCancel={this.handleAddCancel}
                            className="anyd-modal-exam"
                            okText="确定"
                            cancelText="取消"
                        >
                            <Form
                            >
                                <Form.Item>
                                    {getFieldDecorator('RoomName', {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Please input your note!'
                                            }
                                        ]
                                    })(<Input placeholder="输入类型名称" />)}
                                </Form.Item>
                            </Form>
                        </Modal>
                </div>
                <Table columns={this.columns} dataSource={data} />
            </main>
        </div>
        )
    }
}

export default Form.create({ name: 'register' })(Classment);

