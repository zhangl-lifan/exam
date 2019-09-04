import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {WrappedFormUtils} from 'antd/lib/form/Form'
import {inject, observer} from 'mobx-react'
import './login.css';

interface FormInfo {
  form: WrappedFormUtils,
  user: any,
  abc?: string,
  history:any
}

@inject('user')
@observer

class Login extends React.Component<FormInfo> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async(err: any, values: any) => {
            if (!err) {
                const result = await this.props.user.login(values);
                console.log(result)
                console.log(this.props)
                if(result.code===1){
                    this.props.history.push('/main')
                }else{
                    console.log(new Error())
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
 
        return (
            <div className="login-back-box">
                <div className="loginPage">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('user_name', {
                                rules: [
                                    {
                                        message: 'Please input your username!',
                                        required: true
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('user_pwd', {
                                rules: [
                                    {
                                        message: 'Please input your Password!',
                                        required: true
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                initialValue: true,
                                valuePropName: 'checked'
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                忘记密码
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                className="login-form-button"
                                htmlType="submit"
                                type="primary"
                            >
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form.create({ name: 'normal_login' })(Login);
