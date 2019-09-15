import * as React from 'react';
import { observer, inject } from 'mobx-react';
import {
    Layout,
    Avatar,
    Menu,
    Dropdown,
    Modal,
    Form,
    Input,
    Upload
} from 'antd';
const { Header } = Layout;
import './index.css';

interface BooleanInfo {
    collapsed: boolean;
    collapsible: boolean;
    props: any;
    user?: any;
}

@inject('user', 'global')
@observer
class MyHeader extends React.Component<BooleanInfo> {
    props: any;
    state = {
        value: '',
        visible: false,
        language: [
            {
                lang: '中文'
            },
            {
                lang: '英文'
            }
        ]
    };

    handleOk = (e: any) => {
        this.setState({
            visible: false
        });
    };

    handleCancel = (e: any) => {
        this.setState({
            visible: false
        });
    };

    //国际化的更改事件
    handChange = () => {
        let { locale } = this.props.global;
        this.props.global.changeLocale(locale === 'zh' ? 'en' : 'zh');
        // if(locale==='zh'){
        //     locale = 'zh'
        // }else{
        //     locale = 'en'
        // }
    };

    public render() {
        const menu = (
            <Menu>
                <Menu.Item
                    onClick={() => {
                        this.setState({ visible: true });
                    }}
                >
                    个人中心
                </Menu.Item>
                <Menu.Item>我的班级</Menu.Item>
                <Menu.Item>设置</Menu.Item>
                <Menu.Item>退出登录</Menu.Item>
            </Menu>
        );

        const { userInfo, avatar } = this.props.user;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4, offset: 4 },
            wrapperCol: { span: 12 }
        };

        console.log('name------', userInfo.user_name);

        return (
            <Header className="titles-head">
                <div className="title-contents-text">
                    <span>北京八维研修学院</span>
                    <div className="languages-switch">
                        <select onChange={this.handChange} defaultValue="中文">
                            {this.state.language.map(
                                (item: any, index: number) => {
                                    return (
                                        <option value={item.lang} key={index}>
                                            {item.lang}
                                        </option>
                                    );
                                }
                            )}
                        </select>
                    </div>
                </div>
                <div className="user-upload-box">
                    <div className="userImg">
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <div className="user-contents-page">
                                <Avatar size="large" icon="user" />
                                <span>{userInfo.user_name}</span>
                            </div>
                        </Dropdown>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Form {...formItemLayout}>
                                <Form.Item label="用户头像">
                                    {getFieldDecorator('avatar', {
                                        initialValue: userInfo.user_id
                                    })(
                                        <Upload
                                            name="avatar"
                                            // headers={{"content-type": "multipart/form-data"}}
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            action="http://123.206.55.50:11000/upload"
                                            showUploadList={false}
                                            // beforeUpload={this.beforeUpload}
                                            // onChange={this.handleChange}
                                        >
                                            {/* {avatar ? (
                                            <img
                                                src={avatar}
                                                alt="avatar"
                                                style={{ width: '100%' }}
                                            />
                                        ) : (
                                            uploadButton
                                        )} */}
                                            <img
                                                src={avatar}
                                                alt="avatar"
                                                style={{ width: '100%' }}
                                            />
                                        </Upload>
                                    )}
                                </Form.Item>
                                <Form.Item label="用户ID">
                                    {getFieldDecorator('user_id', {
                                        initialValue: userInfo.user_id
                                    })(<Input disabled={true} />)}
                                </Form.Item>
                                <Form.Item label="用户名">
                                    {getFieldDecorator('user_name', {
                                        initialValue: userInfo.user_name,
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Please input your user name!'
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="密码">
                                    {getFieldDecorator('user_pwd', {
                                        rules: [
                                            {
                                                validator: (
                                                    ruler: Array<object>,
                                                    value: string,
                                                    callback: any
                                                ) => {
                                                    console.log(
                                                        'value...',
                                                        value
                                                    );
                                                    if (
                                                        value &&
                                                        /^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(
                                                            value
                                                        )
                                                    ) {
                                                        callback();
                                                    } else if (!value) {
                                                        callback();
                                                    } else {
                                                        callback(
                                                            'Please input valid password!'
                                                        );
                                                    }
                                                }
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                </div>
            </Header>
        );
    }
}

export default Form.create()(MyHeader);
