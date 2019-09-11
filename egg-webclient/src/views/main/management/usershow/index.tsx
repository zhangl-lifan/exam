import * as React from 'react';
import { Radio, Table } from 'antd';
import { inject, observer } from 'mobx-react';

interface Props {
    form: any,
    getuserlist: any,
    size: any,
    userlist: Array<object>,
    titledata: object,
    isShow: boolean,
    count: number
}

@inject('getuserlist')
@observer

class UserShow extends React.Component<Props>{
    state = {
        size: '用户数据',
        userlist: [],
        title: '用户数据',
        isShow: false,
        count: 0,
        list: [
            {
                type: 0,
                tabTitle: "用户数据",
                children: [
                    {
                        title: '用户名',
                        dataIndex: "user_name",
                        key: "user_name"
                    },
                    {
                        title: '密码',
                        dataIndex: "user_pwd",
                        key: "user_pwd"
                    },
                    {
                        title: '身份',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    }
                ],
                url: "/user/user"
            },
            {
                type: 1,
                tabTitle: "身份数据",
                children: [
                    {
                        title: '身份名称',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    }
                ],
                url: "/user/identity"
            },
            {
                type: 2,
                tabTitle: "API接口权限",
                children: [
                    {
                        title: 'api权限名称',
                        dataIndex: "api_authority_text",
                        key: "api_authority_text"
                    },
                    {
                        title: 'api权限url',
                        dataIndex: "api_authority_url",
                        key: "api_authority_url"
                    },
                    {
                        title: 'api权限方法',
                        dataIndex: "api_authority_method",
                        key: "api_authority_method"
                    }
                ],
                url: "/user/api_authority"
            },
            {
                type: 3,
                tabTitle: "身份和api接口关系",
                children: [
                    {
                        title: '身份名称',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    },
                    {
                        title: 'api权限名称',
                        dataIndex: "api_authority_text",
                        key: "api_authority_text"
                    },
                    {
                        title: 'api权限url',
                        dataIndex: "api_authority_url",
                        key: "api_authority_url"
                    },
                    {
                        title: 'api权限方法',
                        dataIndex: "api_authority_method",
                        key: "api_authority_method"
                    }
                ],
                url: '/user/identity_api_authority_relation'
            },
            {
                type: 4,
                tabTitle: "视图接口权限",
                children: [
                    {
                        title: '视图权限名称',
                        dataIndex: "view_authority_text",
                        key: "view_authority_text"
                    },
                    {
                        title: '视图id',
                        dataIndex: "view_id",
                        key: "view_id"
                    }
                ],
                url: '/useriew_authority'
            },
            {
                type: 5,
                tabTitle: "身份和视图权限关系",
                children: [
                    {
                        title: '身份',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    },
                    {
                        title: '视图名称',
                        dataIndex: "view_authority_text",
                        key: "view_authority_text"
                    },
                    {
                        title: '视图id',
                        dataIndex: "view_id",
                        key: "view_id"
                    }
                ],
                url: "/user/identity_view_authority_relation"
            }
        ]
    }

    componentDidMount() {
        this.tabdata();
    }

    getUSers = async (url: string) => {
        console.log(url);
        const { getuserlist } = this.props.getuserlist;
        let result = await getuserlist(url);
        if (result.code === 1) {
            this.setState({
                userlist: result.data
            },()=>{
                console.log(this.state.userlist);
            })
            result.data.map((item: any, index: any) => {
                return item.key = index;
            })
        } else {
            this.setState({
                isShow: true
            })
        }
    }

    handlebtnChange = (obj: any): void => {
        const { index, value } = obj;
        this.setState({
            count: index,
            title: value
        }, () => {
            this.tabdata();
        })
    }
    showalert = () => {
        alert('没有权限');
        this.setState({
            isShow: false
        })
    }
    tabdata = () => {
        const { count, list } = this.state;
        const index = list.findIndex(item => item.type === count);
        let url = list[index].url;
        this.getUSers(url);
    }

    public render() {
        const { title, userlist, list, count } = this.state;
        return (
            <div className='box'>
                <div className='h2'>用户展示</div>
                <div>
                    <Radio.Group size='large'>
                        {
                            list.map((item: any) => {
                                let params = {
                                    index: item.type,
                                    value: item.tabTitle
                                }
                                return <Radio.Button value={item.tabTitle} onChange={() => { this.handlebtnChange(params) }} key={item.type}>{item.tabTitle}</Radio.Button>
                            })
                        }
                    </Radio.Group>
                </div>
                <div className="h1">{title}</div>
                {
                    this.state.isShow ? this.showalert() : null
                }
                <Table columns={list[count].children} dataSource={userlist} />
            </div>
        )
    }
}

export default UserShow;