import * as React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import { sliderBar } from '../config/index';
import { inject, observer } from 'mobx-react';

// 引入用户路由
import { filterView } from '../utils/permission';
import routes from '../router/routes';

// 国际化
import {injectIntl} from "react-intl"

const { Sider } = Layout;
const { SubMenu } = Menu;

interface MemuProps {
    user?: any;
    children?: any;
    intl?:any
}

@inject('user')
@observer
class Memu extends React.Component<MemuProps> {
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

        let {formatMessage} = this.props.intl;
        const { viewAuthority } = this.props.user;
        let MyRouter = filterView(routes, viewAuthority);
        console.log('props',this.props)

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
                    {MyRouter.map((item: any, index: number) => {
                        return (
                            item.children &&
                            item.children.map((child: any, index: any) => {
                                return child.children ? (
                                    <SubMenu
                                        key={child.path}
                                        title={
                                            <div>
                                                <Icon type={child.icon} />
                                                <span>{child.title?formatMessage({id:child.title}):child.name}</span>
                                            </div>
                                        }
                                    >
                                        {child.children &&
                                            child.children.map(
                                                (slider: any, index: any) => {
                                                       
                                                    if(slider.name===undefined){
                                                        return
                                                    }else{
                                                        
                                                        if(slider.path===undefined){
                                                            return
                                                        }
                                                        return (
                                                            <Menu.Item
                                                                key={slider.path}
                                                            >
                                                                <NavLink
                                                                    to={
                                                                        slider.path
                                                                    }
                                                                >
                                                                    {slider.title?formatMessage({id:slider.title}):slider.name}
                                                                </NavLink>
                                                            </Menu.Item>
                                                        ) 
                                                    }
                                                  
                                                }
                                            )}
                                    </SubMenu>
                                ) : (
                                    child.name && (
                                        <Menu.Item key={child.path}>
                                            <span>{child.title?formatMessage({id:child.title}):child.name}</span>
                                        </Menu.Item>
                                    )
                                );
                            })
                        );
                    })}
                </Menu>
            </Sider>
        );
    }
}

export default injectIntl(Memu);
