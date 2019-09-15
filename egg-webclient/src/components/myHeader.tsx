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
    Upload,
    Icon,
    message
} from 'antd';
const { Header } = Layout;
import './index.css';

interface BooleanInfo {
    collapsed: boolean;
    collapsible: boolean;
    user?: any;
    loading?: any;
    value?:any
}

@inject('user', 'global')
@observer
class MyHeader extends React.Component<BooleanInfo> {
    props: any;
    state = {
        value: '',
        visible: false,
        loading: false,
        language: [
            {
                lang: '中文'
            },
            {
                lang: '英文'
            }
        ]
    };

    constructor(props: any) {
        super(props);
        this.handChange = this.handChange.bind(this);
        this.beforeUpload = this.beforeUpload.bind(this)
        this.upLoadUser = this.upLoadUser.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    //国际化的更改事件
    handChange() {
        let { locale } = this.props.global;
        this.props.global.changeLocale(locale === 'zh' ? 'en' : 'zh');
        // if(locale==='zh'){
        //     locale = 'zh'
        // }else{
        //     locale = 'en'
        // }
    }

    UpLoadUser = async (params: any) => {
        console.log(this.props);
        const { uploadUser } = this.props.user;
        const result = await uploadUser(params);
        console.log(result);
        if(result.code===1){
            this.setState({
                visible: false
            });
            message.success(result.msg)
        }
    };

    handleOk(e: any) {
        // user_id
        this.props.form.validateFields(async (err: Error, values: any) => {
            if (err) {
                return;
            }

            values.avatar = this.props.user.avatar;
            this.UpLoadUser(values);
        });

       
    }

    handleCancel(e: any) {
        this.setState({
            visible: false
        });
    }

    beforeUpload(file:any) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }

    // 上传用户头像
    upLoadUser(user: any) {
        // status: "done"
        console.log('userLoading----',user)
        if (user.file.status === 'done') {
            //上传成功
            // response.data[0].path
            // console.log('path---',user.file.response.data[0].path)
            this.props.user.changAuthority(user.file.response.data[0].path);
        } else {
            console.log('loading---',user.file)
        }
    }

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

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">upload</div>
            </div>
        );

        const { userInfo, avatar } = this.props.user;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4, offset: 4 },
            wrapperCol: { span: 12 }
        };

        // console.log('avatar------', avatar);

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
                                {avatar ? (
                                    <img className="img-loading" src={userInfo.avatar} />
                                ) : (
                                    <Avatar size="large" icon="user" />
                                )}
                                {/* <img className="img-loading" src={userInfo.avatar}/> */}
                                <span>{userInfo.user_name}</span>
                            </div>
                        </Dropdown>
                        <Modal
                            title="更新用户信息"
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
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            action="http://123.206.55.50:11000/upload"
                                            showUploadList={false}
                                            beforeUpload={this.beforeUpload}
                                            onChange={this.upLoadUser}
                                        >
                                            {avatar ? (
                                                <img
                                                    src={avatar}
                                                    alt="avatar"
                                                    style={{ width: '100%' }}
                                                />
                                            ) : (
                                                uploadButton
                                            )}
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
