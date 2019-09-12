import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Layout, Avatar ,Menu, Dropdown, Button} from 'antd';
const { Header } = Layout;


interface BooleanInfo {
    collapsed: boolean;
    collapsible: boolean;
    props: any;
    global: any;
}

@inject('global','upLoadImg')
@observer
class MyHeader extends React.Component<BooleanInfo> {
    props: any;
    state = {
        value: ''
    };

    // upLoadImg = async (form:any) => {
    //     const { upLoadImg } = this.props.upLoadImg;
    //     const result = await upLoadImg(form);
    //     console.log(result.data[0]);
    //     // this.setState({
    //     //     value: result.data[0].path
    //     // })
    // };

    // upLoad = (e: any) => {
    //     // console.log(e.target.files);
    //     let form = new FormData();
    //     let files = e.target.files;
    //     for (let i = 0, len = files.length; i < len; i++) {
    //         form.append(files[i].name, files[i]);
    //     }

    //     this.upLoadImg(form)
    // };

    public render() {
        const { locale } = this.props.global;
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  个人中心
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  我的班级
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  设置
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  退出登录
                </a>
              </Menu.Item>
            </Menu>
          );

        return (
                <Header className="titles-head">
                    <div className="title-contents-text">
                        北京八维研修学院
                         {/* {/*<button
                            className="btns-title"
                            onClick={() =>
                                this.props.global.changeLocale(
                                    locale === 'zh' ? 'en' : 'zh'
                                )
                            }
                        >
                            {locale === 'zh' ? '英文' : '中文'}
                        </button>*/}
                    </div> 
                    <div className="userImg">
                        {/* <div className="img-users"> */}
                            {/* <input
                                type="file"
                                name=""
                                id="userimgs"
                                placeholder="头像"
                                multiple={true}
                                // value={this.state.value}
                                onChange={this.upLoad}
                            /> */}
                            {/* <Avatar size={55} icon="user" /> */}
                        {/* </div> */}
                        {/* <div className="user-messsge"></div> */}
                    </div>
                </Header>
              
        );
    }
}

export default MyHeader;
