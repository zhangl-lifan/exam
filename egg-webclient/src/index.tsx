import * as React from 'react';
import * as ReactDOM from 'react-dom';

// 引入全局样式
import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';

// 引入mobx
import { Provider } from 'mobx-react';
import store from './store/login';
import { inject, observer } from 'mobx-react'

// 引入路由
import RouterView from './router/RouterView';
import routes from './router/routes';
import { BrowserRouter } from 'react-router-dom';
// import {Router} from "react-router";
// import {createBrowserHistory} from "history"

// 引入导航守卫
// import guardInit,{filterView} from './utils/guard';
// 创建一个browser router
// const history = createBrowserHistory()
// const myRoutes = filterView(routes, store.user.viewAuthority);

// 引入国际化
import { IntlProvider } from 'react-intl';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

const localeMap = {
    en: enUS,
    zh: zhCN
};

@inject('global')

class Intl extends React.Component<any>{
  render(){
    // console.log(this.props)
    return <IntlProvider locale={this.props.global.locale} messages={localeMap[this.props.global.locale]}>
      <BrowserRouter>
          <RouterView routes={routes}></RouterView>
      </BrowserRouter>
    </IntlProvider>
  }
}

ReactDOM.render(
    <Provider {...store}>
        <Intl/>
    </Provider>,
    // <Provider {...store}>
    //   <Router history={history}>
    //     <RouterView routes={myRoutes}/>
    //   </Router>
    // </Provider>,
    document.getElementById('root') as HTMLElement
);
