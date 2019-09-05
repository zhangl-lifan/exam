/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 08:57:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-05 09:11:51
 */
import * as React from 'react';
import { Layout } from 'antd';
import './index.css';

const { Header, Content, Sider } = Layout;
class Userhome extends React.Component {
    public render() {
        return (
            <Layout>
                <Header></Header>
                <Sider></Sider>
                <Layout>
                    <Content></Content>
                </Layout>

            </Layout>
        );
    }
}

export default Userhome;