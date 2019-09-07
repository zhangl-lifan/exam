import * as React from 'react';
import RouterView from '../../../router/RouterView';
class Management extends React.Component {
    public render() {
        return (
            <div>
              <RouterView routes={this.props.children}></RouterView>
            </div>
        )
    }
}

export default Management;
