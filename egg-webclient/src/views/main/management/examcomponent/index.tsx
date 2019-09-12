import * as React from 'react';
import '../index.css';
import { Button, Radio, Input, Select,Form } from 'antd';
import { inject, observer } from 'mobx-react';

let { Option } = Select;

interface Props {
    size: any,
    getViews: any,
    getIDlist: any,
    getPorts: any,
    getuserlist: any,
    viewlist: Array<object>,
    IDlist: Array<object>,
    portlist: Array<object>,
    props: any,
    addUser: any,
    userlist: Array<object>
}

@inject('getViews', 'getIDlist', 'getPorts', 'getuserlist', 'addUser')
@observer

class Management extends React.Component<Props> {

    state = {
        size: 'add',
        viewlist: [],
        IDlist: [],
        portlist: [],
        userlist: [],
        isShow: false
    };
    
    componentDidMount() {
        this.getViewlist();
        this.getIDs();
        this.getPortlist();
        this.getUSers();
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

    getUSers = async () => {
        const { getuserlist } = this.props.getuserlist;
        const result = await getuserlist('/user/user');
        this.setState({
            userlist: result.data
        })
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

    handleSizeChange = (e: any) => {
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
    
    handleClick = (e:any) => {
        console.log(e);
    }

    public render() {
        const { viewlist, IDlist, portlist, userlist, isShow } = this.state;
        return (
            <div className='wrap'>
                <div className='h2'>添加用户</div>
                <div className='contentmodule'>
                    <div className='form-left'>
                        <Radio.Group onChange={this.handleSizeChange} size='large'>
                            <Radio.Button value="add">添加用户</Radio.Button>
                            <Radio.Button value="update">更新用户</Radio.Button>
                        </Radio.Group>
                        {
                            isShow ? <Select style={{ width: 160 }} value="请选择用户" className='selectID'>
                                {
                                    userlist && userlist.map((item: any) => {
                                        return <Option key={item.user_id}>{item.user_name}</Option>
                                    })
                                }
                            </Select> : null
                        }
                        <Input placeholder='请输入用户名' className='ipts' />
                        <Input placeholder='请输入用密码' className='ipts' />
                        <Select style={{ width: 160 }} value="请选择身份id" className='selectID'>
                            {
                                IDlist && IDlist.map((item: any) => {
                                    return <Option key={item.identity_id}>{item.identity_text}</Option>
                                })
                            }
                        </Select>
                        <div className='btnbox'>
                            <Button type="primary" className='affirmbtn' onClick={this.handleClick}>确认</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className='form-center'>
                        <Radio.Group onChange={this.handleSizeChange} size='large'>
                            <Radio.Button value="add">添加身份</Radio.Button>
                            <Input placeholder="请输入身份名称" size='default' className='ipt' />
                        </Radio.Group>
                        <div className='btnbox'>
                            <Button type="primary" className='affirmbtn'>确认</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className='form-right'>
                        <Radio.Group onChange={this.handleSizeChange} size='large'>
                            <Radio.Button value="update">添加api接口权限</Radio.Button>
                            <Input placeholder="请输入api接口权限名称" size='default' className='ipt' />
                            <Input placeholder="请输入api接口权限url" size='default' className='ipt' />
                            <Input placeholder="请输入api接口权限方法" size='default' className='ipt' />
                        </Radio.Group>
                        <div className='btnbox'>
                            <Button type="primary" className='affirmbtn'>确认</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className='select-left'>
                        <Radio.Group onChange={this.handleSizeChange} size='large'>
                            <Radio.Button value="add">添加试图接口权限</Radio.Button>
                        </Radio.Group>
                        <Select style={{ width: 160 }} value="请选择已有视图">
                            {
                                viewlist && viewlist.map((item: any) => {
                                    return <Option key={item.view_authority_id}>{item.view_authority_text}</Option>
                                })
                            }
                        </Select>
                        <div className='btnbox'>
                            <Button type="primary" className='affirmbtn'>确认</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className='select-center'>
                        <Radio.Group onChange={this.handleSizeChange} size='large'>
                            <Radio.Button value="add">给身份设置api接口权限</Radio.Button>
                        </Radio.Group>
                        <Select style={{ width: 160 }} value="请选择身份id">
                            {
                                IDlist && IDlist.map((item: any) => {
                                    return <Option key={item.identity_id}>{item.identity_text}</Option>
                                })
                            }
                        </Select>
                        <Select style={{ width: 160 }} value="请选择api接口权限">
                            {
                                portlist && portlist.map((item: any) => {
                                    return <Option key={item.api_authority_id}>{item.api_authority_text}</Option>
                                })
                            }
                        </Select>
                        <div className='btnbox'>
                            <Button type="primary" className='affirmbtn'>确认</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                    <div className='select-right'>
                        <Radio.Group onChange={this.handleSizeChange} size='large'>
                            <Radio.Button value="add">给身份设置视图权限</Radio.Button>
                        </Radio.Group>
                        <Select style={{ width: 160 }} value="请选择身份ID">
                            {
                                IDlist && IDlist.map((item: any) => {
                                    return <Option key={item.identity_id}>{item.identity_text}</Option>
                                })
                            }
                        </Select>
                        <Select style={{ width: 160 }} value="请选择视图权限ID">
                            {
                                viewlist && viewlist.map((item: any) => {
                                    return <Option key={item.view_authority_id}>{item.view_authority_text}</Option>
                                })
                            }
                        </Select>
                        <div className='btnbox'>
                            <Button type="primary" className='affirmbtn'>确认</Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Management;