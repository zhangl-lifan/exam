import * as React from 'react';
import { Layout, Avatar ,Menu, Dropdown, Button} from 'antd';
import { observer, inject } from 'mobx-react';
import RouterView from '../../router/RouterView';
const { Header, Content } = Layout;
import Memu from '../../components/memu';
import MyHeader from 'src/components/myHeader';
import "./index.css"

interface BooleanInfo {
    collapsed?: boolean;
    collapsible?: boolean;
    props?: any;
    global?: any;
}

@inject('global','upLoadImg')
class Main extends React.Component<BooleanInfo> {
    props: any;
    state = {
        value: ''
    };

    

    upLoadImg = async (form:any) => {
        const { upLoadImg } = this.props.upLoadImg;
        const result = await upLoadImg(form);
        console.log(result.data[0]);
        // this.setState({
        //     value: result.data[0].path
        // })
    };

    upLoad = (e: any) => {
        // console.log(e.target.files);
        let form = new FormData();
        let files = e.target.files;
        for (let i = 0, len = files.length; i < len; i++) {
            form.append(files[i].name, files[i]);
        }

        this.upLoadImg(form)
    };

    public render() {
        const { locale } = this.props.global;
        

        return (
            <Layout>
                <MyHeader/>
                <Layout style={{ minHeight: '90vh' }}>
                    <Memu></Memu>
                    <Content
                        style={{ padding: '0 24px', background: '#f0f2f5' }}
                    >
                        <RouterView routes={this.props.children}></RouterView>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Main;
