import * as React from 'react';
import RouterView from 'src/router/RouterView';

class Management extends React.Component {
    render() {
        console.log(this.props.children)
        return <div>
            <RouterView routes={this.props.children} />
        </div>
    }
}
export default Management;