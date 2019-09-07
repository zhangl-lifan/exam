import * as React from 'react';
import { Button, Radio, Input, Select } from 'antd';
import { inject, observer } from 'mobx-react';

interface Props {
    form: any,
    getuserlist: any,
    size: any,
    userlist: Array<object>,
    titledata: object
}

@inject('getuserlist')
@observer

class UserShow extends React.Component<Props>{
    state = {
        size: '用户数据',
        userlist: [],
        title: '用户数据',
        titledata: {
            name: '用户名',
            pwd: '密码',
            ID: "身份"
        }
    }

    handleSizeChange = (e: any) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: Error, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                console.log(values);
            }
        });
    }

    componentDidMount() {
        this.tabdata();
    }

    getUSers = async () => {
        const { getuserlist } = this.props.getuserlist;
        let result = await getuserlist();
        if (result.code === 1) {
            this.setState({
                userlist: result.data
            },()=>{
                console.log(this.state.userlist);
            })
        }
    }

    handlebtnChange = (e: any) => {
        this.setState({
            size: e.target.value,
            title: e.target.value
        }, () => {
            this.tabdata();
        })
    }

    tabdata = () => {
        const { size } = this.state;
        if (size === '用户数据') {
            this.getUSers();
        }
    }

    public render() {
        const { title, userlist, titledata } = this.state;
        return (
            <div className='box'>
                <div className='h2'>用户展示</div>
                <div>
                    <Radio.Group onChange={this.handlebtnChange} size='large'>
                        <Radio.Button value="用户数据">用户数据</Radio.Button>
                        <Radio.Button value="身份数据">身份数据</Radio.Button>
                        <Radio.Button value="api接口权限">api接口权限</Radio.Button>
                        <Radio.Button value="身份和api接口关系">身份和api接口关系</Radio.Button>
                        <Radio.Button value="视图接口权限">视图接口权限</Radio.Button>
                        <Radio.Button value="身份和视图权限关系">身份和视图权限关系</Radio.Button>
                    </Radio.Group>
                </div>
                <div className="h1">{title}</div>
                <ul className='contenttitle'>
                    <li className='titleone'>
                        <p className='classname'>{titledata.name}</p>
                        <p className='coursename'>{titledata.pwd}</p>
                        <p className='root'>{titledata.ID}</p>
                    </li>
                    {
                        userlist && userlist.map((item: any) => {
                            return <li key={item.user_id}>
                                <p className='classname'>{item.user_name}</p>
                                <p className='coursename'>{item.user_pwd}</p>
                                <p className='root'>{item.identity_text}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserShow;