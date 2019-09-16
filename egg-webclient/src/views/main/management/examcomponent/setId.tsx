import * as React from 'react';
import '../index.css';
import { Button, Radio, message, Select, Form } from 'antd';
import { inject, observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';
const { Option } = Select;

interface Props extends FormComponentProps {
    form: any,
    IDlist: any,
    viewlist: any,
    user:any
}

@inject('user')
@observer

class Addshen extends React.Component<Props> {
    props: any;

    state = {
        IDlist: [],
        viewlist: []
    }

    componentDidMount() {
        this.getIDs();
        this.getViewlist()
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

    setIDfun = async (params:any) => {
        const { setView } = this.props.user;
        let result = await setView(params);
        console.log(result);
        if(result.code === 1){
            message.success(result.msg)
        }else{
            message.error(result.msg)
        }
    }

    getViewlist = async () => {
        const { getViews } = this.props.user;
        let result = await getViews();
        if (result.code === 1) {
            this.setState({
                viewlist: result.data
            })
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const params = {
                    identity_id: values.view,
                    view_authority_id: values.ID
                }
                this.setIDfun(params);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { IDlist, viewlist } = this.state;
        return <div>
            <Form className='select-right' onSubmit={this.handleSubmit}>
            <Form.Item>
                <Radio.Group size='large' defaultValue='set'>
                    <Radio.Button value="set">给身份设置视图权限</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('view', {
                    rules: [{ required: true, message: 'Please input your gender!' }],
                })(
                    <Select style={{ width: 160 }} placeholder="请选择身份ID">
                        {
                            IDlist && IDlist.map((item: any) => {
                                return <Option key={item.identity_id}>{item.identity_text}</Option>
                            })
                        }
                    </Select>
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('ID', {
                    rules: [{ required: true, message: 'Please input your gender!' }],
                })(
                    <Select style={{ width: 160 }} placeholder="请选择视图权限ID">
                        {
                            viewlist && viewlist.map((item: any) => {
                                return <Option key={item.view_authority_id}>{item.view_authority_text}</Option>
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