import * as React from 'react';
import '../index.css';
import { Button, Radio, message, Select, Form } from 'antd';
import { inject, observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';
const { Option } = Select;
interface Props extends FormComponentProps {
    form: any,
    getIDlist: any,
    getPorts: any,
    IDlist: any,
    portlist: any,
    setApi: any
}

@inject('getIDlist', 'getPorts', 'setApi')
@observer

class Addshen extends React.Component<Props>{
    form: any;
    state = {
        IDlist: [],
        portlist: [],
    }
    componentDidMount() {
        this.getIDs();
        this.getPortlist();
    }
    getIDs = async () => {
        const { getIDlist } = this.props.getIDlist;
        let result = await getIDlist();
        if (result.code === 1) {
            this.setState({
                IDlist: result.data
            })
        }
    }

    getPortlist = async () => {
        const { getPorts } = this.props.getPorts;
        let result = await getPorts();
        if (result.code === 1) {
            this.setState({
                portlist: result.data
            })
        }
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const params = {
                    identity_id: values.identityID,
                    api_authority_id: values.Api
                }
                this.setApifun(params);
            }
        });
    };

    setApifun = async (params: any) => {
        const { setApi } = this.props.setApi;
        const result = await setApi(params);
        if(result.code === 1){
            message.success(result.msg)
        }else{
            message.error(result.msg)
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { IDlist, portlist } = this.state;
        return <div>
            <Form className='select-center' onSubmit={this.handleSubmit}>
            <Form.Item>
                <Radio.Group size='large' defaultValue='set'>
                    <Radio.Button value="set">给身份设置api接口权限</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('identityID', {
                    rules: [{ required: true, message: 'Please select your identityID!' }],
                })(
                    <Select style={{ width: 160 }} placeholder="请选择身份id">
                        {
                            IDlist && IDlist.map((item: any) => {
                                return <Option key={item.identity_id}>{item.identity_text}</Option>
                            })
                        }
                    </Select>
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('Api', {
                    rules: [{ required: true, message: 'Please select your Api!' }],
                })(
                    <Select style={{ width: 160 }} placeholder="请选择api接口权限">
                        {
                            portlist && portlist.map((item: any) => {
                                return <Option key={item.api_authority_id}>{item.api_authority_text}</Option>
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