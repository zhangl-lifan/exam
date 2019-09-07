import * as React from 'react';
import { Button, Input, Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import './index.css';

interface Props {
    getclasslist: any,
    classlist: Array<object>,
    isShow: boolean,
    form: any
}

interface Props extends FormComponentProps {
    history: any
}

@inject('getclasslist')
@observer

class ClassManagement extends React.Component<Props> {
    state = {
        classlist: [],
        isShow: false
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    componentDidMount() {
        this.getlist();
    }
    public getlist = async () => {
        const { getclasslist } = this.props.getclasslist;
        const result = await getclasslist();
        if (result.code === 1) {
            this.setState({
                classlist: result.data
            }, () => {
                console.log(this.state.classlist);
            })
        }
    }
    public btnClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    public render() {
        let { classlist, isShow } = this.state;
        //const { getFieldDecorator } = this.props.form;
        return (
            <div className='box'>
                <h1>班级管理</h1>
                <div className="contentinner">
                    <Button type="primary" onClick={this.btnClick} className='addbtn' size='large'>+ 添加班级</Button>
                    <ul className='contenttitle'>
                        <li className='titleone'>
                            <p className='classname'>班级名称</p>
                            <p className='coursename'>课程名</p>
                            <p className='root'>教室号</p>
                            <p className='operation'>操作</p>
                        </li>
                        {
                            classlist && classlist.map((item: any) => {
                                return <li key={item.grade_id}>
                                    <p className='classname'>{item.grade_name}</p>
                                    <p className='coursename'>{item.subject_text}</p>
                                    <p className='root'>{item.room_text}</p>
                                    <p className='operation'>修改/删除</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                {/* <div className='mask'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        type: 'username',
                                        message: 'The input is not valid username!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                    </Form>
                </div> */}

            </div>
        )
    }
}

export default ClassManagement;