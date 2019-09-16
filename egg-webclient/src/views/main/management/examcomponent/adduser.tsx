import * as React from 'react';
import '../index.css';
import { Button, Radio, Input, Select, Form, message } from 'antd';
import { inject, observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';
const { Option } = Select;
interface AddProps extends FormComponentProps<any> {
    form: any,
    isShow?: boolean,
    userList?: any,
    user:any
}

@inject('user')
@observer

class Addshen extends React.Component<AddProps> {
    props: any;

    state = {
        isShow: false,
        userlist: [],
        IDlist: []
    }

    componentDidMount() {
        this.getUSers();
        this.getIDs();
    }

    getIDs = async () => {
        const { getIDlist } = this.props.user;
        let result = await getIDlist();
        if (result.code === 1) {
            this.setState({
                IDlist: result.data
            })
        }
    }

    getUSers = async () => {
        const { getuserlist } = this.props.user;
        const result = await getuserlist('/user/user');
        this.setState({
            userlist: result.data
        })
    }

    handleSizeChange = (e: any) => {
        e.preventDefault();
        if (e.target.value === "update") {
            this.setState({
                size: e.target.value,
                isShow: true
            })
        } else {
            this.setState({
                size: e.target.value,
                isShow: false
            })
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        const { isShow } = this.state;
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if (!isShow) {
                    const params = {
                        user_name: values.user_name,
                        user_pwd: values.user_pwd
                    }
                    this.AddUser(params);
                } else {
                    this.Updateuser(values);
                }
            }
        });
    };
    AddUser = async (params: any) => {
        const { userAdd } = this.props.user;
        const result = await userAdd(params);
        if (result.code === 1) {
            message.success(result.msg)
        } else {
            message.error(result.msg)
        }
    }

    Updateuser = async (params: any) => {
        const { updateUser } = this.props.user;
        const result = await updateUser(params);
        if (result.code === 1) {
            message.success(result.msg)
        } else {
            message.error(result.msg)
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { isShow, userlist, IDlist } = this.state;
        return <div>
            <Form className='form-left' onSubmit={this.handleSubmit}>
                <Form.Item>
                    <Radio.Group onChange={this.handleSizeChange} size='large' defaultValue='add'>
                        <Radio.Button value="add">添加用户</Radio.Button>
                        <Radio.Button value="update">更新用户</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                {
                    isShow ? <Form.Item>
                        {getFieldDecorator('user_id', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Select style={{ width: 160 }} placeholder="请选择用户" className='selectID'>
                                {
                                    userlist && userlist.map((item: any) => {
                                        return <Option key={item.user_id}>{item.user_name}</Option>
                                    })
                                }
                            </Select>
                        )}
                    </Form.Item> : null
                }
                <Form.Item>
                    {getFieldDecorator('user_name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input placeholder='请输入用户名' className='ipts' />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('user_pwd', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input placeholder='请输入用密码' className='ipts' />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('identity_id', {
                        rules: [{ required: true, message: 'Please input your id!' }],
                    })(
                        <Select style={{ width: 160 }} placeholder="请选择身份id" className='selectID'>
                            {
                                IDlist && IDlist.map((item: any) => {
                                    return <Option key={item.identity_id}>{item.identity_text}</Option>
                                })
                            }
                        </Select>
                    )}
                </Form.Item>
                <Form.Item className='btnbox'>
                    <Button type="primary" className='affirmbtn' htmlType="submit">确认</Button>
                    <Button>重置</Button>
                </Form.Item>
            </Form>
        </div>
    }
}
export default Form.create()(Addshen)