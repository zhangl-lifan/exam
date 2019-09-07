// classRoom
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table,Button ,Divider,Modal,Form,Input} from 'antd';
import './index.css';

interface ProdTypeinfo {
    data: Array<object>;
    questionsType: any;
    key: any;
    addRoom:any;
    form:any
}

@inject('addRoom')
@observer

class ClassRoom extends React.Component<ProdTypeinfo> {

    state = {
        //  试题类型
        data: [],
        typeName:'',
        visible:false,
        confirmDirty: false,
        autoCompleteResult: [],
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
            key: 'subject_id',
        },
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
                <a>修改 {record.name}</a>
                <Divider type="vertical" />
                <a>删除</a>
              </span>
            ),
          },
    ];

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.AddRoom();
    }

    // 获取教室的数据
    AddRoom = async () => {
        const { addRoom } = this.props.addRoom;
        const result = await addRoom();
        console.log(result.data)
        const data = result.data.map((item:any,index:number)=>{
            return {
                        key:index,
                        grade_name:item.grade_name,
                        room_text:item.room_text,
                        subject_text:item.subject_text
                   }
               })
        this.setState({
            data
        });
    };

    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err:Error, values:any) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    

    public render() {
        const { getFieldDecorator } = this.props.form;
        const { data } = this.state;
        return (
            <div className="TypePage">
                <header className="header">班级管理</header>
                <main className="type-content">
                    <div className="btn-type-add">
                        <Button type="primary" icon="plus" size="large" onClick={this.showModal}>
                             添加班级
                        </Button>
                        <Modal
                            title="添加班级"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            className="anyd-modal"
                            okText="确定"
                            cancelText="取消"
                            >
                                <Form onSubmit={this.handleSubmit} className="form-box">
                                    <Form.Item label="班级名">
                                        {getFieldDecorator('grade_name', {
                                            // initialValue: item.name,
                                        rules: [{ required: true, message: 'grade_name is required!' }]
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="课程名">
                                        {getFieldDecorator('subject_text', {
                                        rules: [{ required: true, message: 'subject_text is required!' }],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="教室号">
                                        {getFieldDecorator('room_text', {
                                        rules: [{ required: true, message: 'room_text is required!' }],
                                        })(<Input />)}
                                    </Form.Item>
                                   
                                </Form>
                        </Modal>
                    </div>
                    <Table columns={this.columns} dataSource={data} />
                </main>
            </div>
        )
    }

      // 添加类型的函数
      showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
      handleOk = (e:any) => {

//         grade_id: "hg9pz-qxoiw2-8hgd8-bmtr5"
        // grade_name: "1701B"
        // room_id: "68kr4-5hl1br-4p1ogc-r7qj8s"
        // room_text: "34303"
        // subject_id: "4pu32-vs796l"
        // subject_text: "node基础"
        this.props.form.validateFields((err:Error, values:any) => {
            if (err){
                return
            };//检查Form表单填写的数据是否满足rules的要求
            console.log(values)
          })
        // let valueName = this.state.typeName;
        // let addEXamType = {
        //     text:valueName,
        //     sort: this.state.data.length + 1
        // }
        // questions_type_text: "简答题", questions_type_sort: 1
        // this.AinsertQuestionsType(addEXamType)
        // this.setState({
        //   visible: false,
        //   typeName:''
        // });

        // 强制刷新页面
        // window.location.reload()
      };
    
      handleCancel = (e:any) => {
        this.setState({
          visible: false,
          typeName:''
        });
      };
}

export default Form.create({ name: 'register' })(ClassRoom);;