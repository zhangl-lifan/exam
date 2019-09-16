import * as React from 'react';
import '../index.css';
import { Button, Radio, Input, Form, message } from 'antd';
import { inject, observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';

interface Props extends FormComponentProps {
    form: any,
    user:any
}

@inject('user')
@observer

class Addshen extends React.Component<Props>{
    props: any;
    handleSubmitadd = (e: any) => {
        e.preventDefault();
        console.log(333)
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const params = {
                    identity_text: values.username
                }
                this.addidentity(params);
            }
        });
    };
    addidentity = async (params: any) => {
        const { addidentity } = this.props.user;
        const result = await addidentity(params);
        if (result.code === 1) {
            message.success(result.msg)
        } else {
            message.error(result.msg)
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return <div>
            <Form className='form-center' onSubmit={this.handleSubmitadd}>
                <Form.Item>
                    <Radio.Group size='large' defaultValue='add'>
                        <Radio.Button value="add">添加身份</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item className='moveleft'>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input placeholder="请输入身份名称" size='default' className='ipt' />
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