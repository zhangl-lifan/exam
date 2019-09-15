import * as React from 'react';
import { Layout} from 'antd';
import {  inject,observer} from 'mobx-react';
import RouterView from '../../router/RouterView';
const {  Content } = Layout;
import Memu from '../../components/memu';
import MyHeader from 'src/components/myHeader';
import "./index.css"

interface BooleanInfo {
    collapsed?: boolean;
    collapsible?: boolean;
    props?: any;
}
@inject('user')
@observer
class Main extends React.Component<BooleanInfo> {
    props: any;
    state = {
        value: ''
    };



    public render() {

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
