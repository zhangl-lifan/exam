import * as React from 'react';
import '../index.css';
import { Button, Radio, Input, message, Form } from 'antd';
import { inject, observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';

interface Props extends FormComponentProps {
    form: any,
    addApi: any
}

@inject('addApi')
@observer

class Addshen extends React.Component<Props>{
    form: any;

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.addApifun(values);
            }
        });
    };

    addApifun = async (params: any) => {
        const { addApi } = this.props.addApi;
        const result = await addApi(params);
        if(result.code === 1){
            message.success(result.msg)
        }else{
            message.error(result.msg)
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return <div>
            <Form className='form-right' onSubmit={this.handleSubmit}>
            <Form.Item>
                <Radio.Group size='large' defaultValue='update'>
                    <Radio.Button value="update">添加api接口权限</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item className='moveleft'>
                {getFieldDecorator('api_authority_text', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input placeholder="请输入api接口权限名称" size='default' className='ipt' />
                )}
            </Form.Item>
            <Form.Item className='moveleft'>
                {getFieldDecorator('api_authority_url', {
                    rules: [{ required: true, message: 'Please input your url!' }],
                })(
                    <Input placeholder="请输入api接口权限url" size='default' className='ipt' />
                )}
            </Form.Item>
            <Form.Item className='moveleft'>
                {getFieldDecorator('api_authority_method', {
                    rules: [{ required: true, message: 'Please input your fun!' }],
                })(
                    <Input placeholder="请输入api接口权限方法" size='default' className='ipt' />
                )}
            </Form.Item>
            <Form.Item className='btnbox'>
                <Button type="primary" htmlType="submit" className='affirmbtn'>确认</Button>
                <Button>重置</Button>
            </Form.Item>
        </Form>
        </div>
    }
}
export default Form.create()(Addshen)