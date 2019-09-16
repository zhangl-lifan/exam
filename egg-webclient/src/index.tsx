import * as React from 'react';
import * as ReactDOM from 'react-dom';

// 引入全局样式
import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';

// 引入mobx
import { Provider,inject,observer } from 'mobx-react';
import store from './store/login';

// 引入路由
import RouterView from './router/RouterView';
import routes from './router/routes';
import {Router} from "react-router";

import {createHashHistory} from "history";


// 引入导航守卫
import guardInit,{filterView} from "./utils/permission";
// 创建一个brower
const history = createHashHistory();
const myRoutes = filterView(routes, store.user.viewAuthority);
// console.log(myRoutes)


// 引入国际化
import {IntlProvider} from "react-intl";
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';
const localeMap = {
  en: enUS,
  zh: zhCN
}


guardInit(history)
@inject('global')
@observer
class Intl extends React.Component<any>{
    render(){
      return <IntlProvider locale={this.props.global.locale} messages={localeMap[this.props.global.locale]}>
        <Router history={history}>
          <RouterView routes={routes}/>
        </Router>
      </IntlProvider>
    }
  }

  
ReactDOM.render(
    <Provider {...store}>
        <Intl/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
