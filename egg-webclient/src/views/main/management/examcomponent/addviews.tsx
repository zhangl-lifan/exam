import * as React from 'react';
import '../index.css';
import { Button, Radio, message, Select, Form } from 'antd';
import { inject, observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';

const { Option } = Select;

interface Props extends FormComponentProps {
    form: any,
    getViews: any,
    viewlist: any,
    addView: any,
    viewid: any
}
@inject('getViews', 'addView')
@observer
class Addshen extends React.Component<Props>{
    form: any;
    state = {
        viewlist: [],
        viewid: {
            view_id: 1
        }
    }
    componentDidMount() {
        this.getViewlist();
    }
    getViewlist = async () => {
        const { getViews } = this.props.getViews;
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
                    view_authority_text: values.gender,
                    view_id: this.state.viewid.view_id
                }
                this.addViewfun(params);
            }
        });
    };

    addViewfun = async (params: any) => {
        const { addView } = this.props.addView;
        let result = await addView(params);
        if(result.code === 1){
            message.success(result.msg)
        }else{
            message.error(result.msg)
        }
    }

    SelectChange = (e: any) => {
        const { viewlist } = this.state;
        const findindex = viewlist.findIndex((item: any) => {
            return item.view_authority_text === e;
        })
        this.setState({
            viewid: viewlist[findindex]
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { viewlist } = this.state;
        return <div>
            <Form className='select-left' onSubmit={this.handleSubmit}>
            <Form.Item>
                <Radio.Group size='large' defaultValue='add'>
                    <Radio.Button value="add">添加试图接口权限</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('gender', {
                    rules: [{ required: true, message: 'Please input your gender!' }],
                })(
                    <Select style={{ width: 160 }} placeholder="请选择已有视图" onChange={this.SelectChange}>
                        {
                            viewlist && viewlist.map((item: any) => {
                                return <Option key={item.view_id} value={item.view_authority_text}>{item.view_authority_text}</Option>
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