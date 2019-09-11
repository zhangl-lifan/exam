import * as React from 'react';
import { Layout} from 'antd';
import {observer, inject} from 'mobx-react';


import RouterView from '../../router/RouterView';
const { Header, Content } = Layout;
import Memu from "../../components/memu"

import './index.css';

interface BooleanInfo {
    collapsed: boolean;
    collapsible: boolean;
    props: any,
    global:any
}

@inject('global')

class Main extends React.Component<BooleanInfo> {
    props: any;

    public render() {
        const {locale} = this.props.global;
        return (
            <Layout>
                <Header className="title">
                    北京八维研修学院
                    <button onClick={()=>this.props.global.changeLocale(locale==='zh'?'en':'zh')}>{locale==='zh'?'英文':'中文'}</button>
                </Header>
                <Layout style={{ minHeight: '90vh' }}>
                    <Memu></Memu>
                    <Content style={{ padding: '0 24px', background:"#f0f2f5"}}>
                         <RouterView routes={this.props.children}></RouterView>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Main;
