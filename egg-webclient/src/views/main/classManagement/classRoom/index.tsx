// classRoom
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import {
    Table,
    Button,
    Divider,
    Modal,
    Form,
    Input,
    Select,
    message
} from 'antd';
const { Option } = Select;
import './index.css';

interface ProdTypeinfo {
    data: Array<object>;
    questionsType: any;
    key: any;
    addRoom: any;
    form: any;
    getroom: any;
    subject: any;
    gradeRoom: any;
    deleteGide: any;
    gradeUpdate:any;
}

@inject('addRoom', 'getroom', 'subject', 'gradeRoom', 'deleteGide','gradeUpdate')
@observer
class ClassRoom extends React.Component<ProdTypeinfo> {
    state = {
        //  试题类型
        data: [],
        typeName: '',
        visible: false,
        confirmDirty: false,
        autoCompleteResult: [],
        classRooms: [],
        subjectList: [],
        isShow: false,
        room_id:'',
        subject_id:'',
        grade_id:''
    };

    columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: 'grade_id'
        },
        {
            title: '课程名',
            dataIndex: 'subject_text',
            key: 'subject_id'
        },
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_id'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: any) => (
                <span>
                    <a onClick={() => this.modify(record)}>
                        修改 {record.name}
                    </a>
                    <Divider type="vertical" />
                    <a onClick={() => this.deleteFn(record)}>删除</a>
                </span>
            )
        }
    ];

    componentDidMount() {
        this.AddRoom();
        this.Getroom();
        this.Getcourselist();
    }

    // 获取教室的数据
    AddRoom = async () => {
        const { addRoom } = this.props.addRoom;
        const result = await addRoom();
        const data = result.data.map((item: any) => {
            return {
                key: item.grade_id,
                grade_name: item.grade_name,
                room_text: item.room_text,
                subject_text: item.subject_text
            };
        });
        this.setState({
            data
        });
    };

    // 获取教室名的数据
    //  {room_id: "idf126-po0y5l-y19vjj-y2ud6o",room_text: "34301"}
    Getroom = async () => {
        const { getroom } = this.props.getroom;
        const result = await getroom();
        this.setState({
            classRooms: result.data
        });
    };

    // 获取课程名的数据
    // {subject_id: "fqtktr-1lq5u",subject_text: "javaScript上"}
    Getcourselist = async () => {
        const { subject } = this.props.subject;
        const result = await subject();
        this.setState({
            subjectList: result.data
        });
    };

    // 删除班级的接口
    // grade_id
    TeleteGide = async (opt: any) => {
        const { deleteGide } = this.props.deleteGide;
        const result = await deleteGide(opt);
        if (result.code === 1) {
            message.success(result.msg);
            this.AddRoom();
        }
    };
    
    // 更新班级的接口
    GradeUpdate = async (opt: any) => {
        const { gradeUpdate } = this.props.gradeUpdate;
        const result = await gradeUpdate(opt);
        console.log(result)
        if (result.code === 1) {
            message.success(result.msg);
            this.AddRoom();
        }
    };

    // 修改班级
    modify = async (record: any) => {
        // console.log('record', record);
        this.setState({
            isShow: true,
            grade_id:record.key
        });

        this.props.form.setFieldsValue({
            grade_name: record.grade_name,
            room_text: record.room_text,
            subject_text: record.subject_text
        });
    };

    // 删除班级
    deleteFn = async (record: any) => {
        this.TeleteGide({ grade_id: record.key });
    };

    // gradeRoom
    // 添加班级的接口
    GradeRoom = async (opt: any) => {
        const { gradeRoom } = this.props.gradeRoom;
        const result = await gradeRoom(opt);
        if (result.code === 1) {
            message.success(result.msg);
            this.props.form.setFieldsValue({
                grade_name: '',
                room_text:'',
                subject_text:''
            });
            this.AddRoom();
        } else {
            message.error('添加失败！！！');
        }
    };

    public render() {
        const { getFieldDecorator } = this.props.form;
        const { data, classRooms, subjectList } = this.state;
        return (
            <div className="TypePage-classRoom">
                <header className="header-classRoom">班级管理</header>
                <main className="type-content-classRoom">
                    <div className="btn-classRoom-add">
                        <Button
                            type="primary"
                            icon="plus"
                            size="large"
                            onClick={this.showModal}
                        >
                            添加班级
                        </Button>
                        <Modal
                            title="添加班级"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            className="classRoom-modal"
                            okText="确定"
                            cancelText="取消"
                        >
                            <Form className="form-box-class">
                                <Form.Item label="班级名">
                                    {getFieldDecorator('grade_name', {
                                        rules: [
                                            {
                                                message:
                                                    'grade_name is required!'
                                            }
                                        ]
                                    })(<Input placeholder="班级号" />)}
                                </Form.Item>
                                <Form.Item label="教室号">
                                    {getFieldDecorator('room_id', {
                                        rules: [
                                            {
                                                message:
                                                    'Please select your room_text!'
                                            }
                                        ]
                                    })(
                                        <Select placeholder="请选择教室号">
                                            {classRooms &&
                                                classRooms.map((item: any) => {
                                                    return (
                                                        <Option
                                                            value={item.room_id}
                                                            key={item.room_id}
                                                        >
                                                            {item.room_text}
                                                        </Option>
                                                    );
                                                })}
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item label="课程名">
                                    {getFieldDecorator('subject_id', {
                                        rules: [
                                            {
                                                message:
                                                    'Please select your subject_text!'
                                            }
                                        ]
                                    })(
                                        <Select placeholder="请选择课程名">
                                            {subjectList &&
                                                subjectList.map((item: any) => {
                                                    return (
                                                        <Option
                                                            value={
                                                                item.subject_id
                                                            }
                                                            key={
                                                                item.subject_id
                                                            }
                                                        >
                                                            {item.subject_text}
                                                        </Option>
                                                    );
                                                })}
                                        </Select>
                                    )}
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                    <Table columns={this.columns} dataSource={data} />
                </main>
                <Modal
                    title="修改班级"
                    visible={this.state.isShow}
                    onOk={this.handleWriteOk}
                    onCancel={this.handleWriteCancel}
                    className="classRoom-modal"
                    okText="确定"
                    cancelText="取消"
                >
                    <Form className="form-box-class">
                        <Form.Item label="班级名">
                            {getFieldDecorator('grade_name', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'grade_name is required!'
                                    }
                                ]
                            })(<Input placeholder="班级号"/>)}
                        </Form.Item>
                        <Form.Item label="教室号">
                            {getFieldDecorator('room_text', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please select your room_text!'
                                    }
                                ]
                            })(
                                <Select placeholder="请选择教室号" onChange={this.getSelectVal}>
                                    {classRooms &&
                                        classRooms.map((item: any) => {
                                            return (
                                                <Option
                                                    value={item.room_id}
                                                    key={item.room_id}
                                                >
                                                    {item.room_text}
                                                </Option>
                                            );
                                        })}
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="课程名">
                            {getFieldDecorator('subject_text', {
                                rules: [
                                    {
                                        required: true,
                                        message:
                                            'Please select your subject_text!'
                                    }
                                ]
                            })(
                                <Select placeholder="请选择课程名" onChange={this.getSubjectVal}>
                                    {subjectList &&
                                        subjectList.map((item: any) => {
                                            return (
                                                <Option
                                                    value={item.subject_id}
                                                    key={item.subject_id}
                                                >
                                                    {item.subject_text}
                                                </Option>
                                            );
                                        })}
                                </Select>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }

    // 添加类型的函数
    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = (e: any) => {
        this.props.form.validateFields((err: Error, values: any) => {
            //检查Form表单填写的数据是否满足rules的要求
            console.log(values)
            this.GradeRoom(values);
            this.setState({
                visible: false
            });
        });
    };

    handleCancel = (e: any) => {
        this.setState({
            visible: false,
            typeName: ''
        });
    };

    // 修改的弹出框

    getSelectVal = (value:any)=>{
        this.setState({
            room_id:value
        })
    }

    getSubjectVal = (value:any)=>{
        this.setState({
            subject_id:value
        })
    }

    handleWriteOk = (e: any) => {
        this.props.form.validateFields((err: Error, values: any) => {
            if (err) {
                return;
            }
            //检查Form表单填写的数据是否满足rules的要求
            let opts = {
                grade_name:values.grade_name,
                grade_id:this.state.grade_id,
                subject_id:this.state.subject_id,
                room_id:this.state.room_id,
            }

            this.GradeUpdate(opts)
            this.setState({
                isShow: false
            });

        });
    };

    handleWriteCancel = (e: any) => {
        this.setState({
            isShow: false
        });
    };
}

export default Form.create({ name: 'register' })(ClassRoom);
