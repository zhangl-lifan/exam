import * as React from 'react';
import './App.css';
import Router from './router/routerViews';
import router from './router/index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <BrowserRouter>
          <Router routes={router.routes} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
