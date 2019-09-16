import * as React from 'react';
import RouterView from "../../../router/RouterView";

interface Props {
    getclasslist: any,
    classlist: Array<object>,
    isShow: boolean,
    form: any
}

class ClassManagement extends React.Component<Props> {

    public render() {
        return (
            <div>
                <RouterView routes={this.props.children}></RouterView>
            </div>
        )
    }
}

export default ClassManagement;