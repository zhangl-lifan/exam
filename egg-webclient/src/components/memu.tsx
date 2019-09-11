import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import { sliderBar } from '../config/index';
const { Sider } = Layout;
const { SubMenu } = Menu;

import { injectIntl } from 'react-intl';

interface Props {
    user?: any;
    intl?: any;
}

class Memu extends React.Component {
    state = {
        sliderBar,
        collapsed: false
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    public render() {
        console.log(this.props)
        return (
            <Sider
                className="slider-box-drop"
                trigger={null}
                collapsed={this.state.collapsed}
            >
                <Button
                    type="primary"
                    onClick={this.toggleCollapsed}
                    style={{ marginBottom: 16 }}
                >
                    <Icon
                        type={
                            this.state.collapsed ? 'menu-unfold' : 'menu-fold'
                        }
                    />
                </Button>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {this.state.sliderBar.map(slider => {
                        return slider.children === undefined ||
                            slider.children.length < 1 ? (
                            <Menu.Item key={slider.id}>
                                <Icon type={slider.icon} />
                                <NavLink to={slider.path}>
                                    {slider.name}
                                </NavLink>
                            </Menu.Item>
                        ) : (
                            <SubMenu
                                key={slider.id}
                                title={
                                    <div>
                                        <Icon type={slider.icon} />
                                        <NavLink to={slider.path}>
                                            {slider.name}
                                        </NavLink>
                                    </div>
                                }
                            >
                                {slider.children &&
                                    slider.children.map(children => {
                                        return (
                                            <Menu.Item key={children.id}>
                                                <NavLink to={children.path}>
                                                    {children.name}
                                                </NavLink>
                                            </Menu.Item>
                                        );
                                    })}
                            </SubMenu>
                        );
                    })}
                </Menu>
            </Sider>
        );
    }
}

export default injectIntl(Memu);
