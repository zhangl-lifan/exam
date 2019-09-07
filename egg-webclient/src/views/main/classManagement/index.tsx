import * as React from 'react';
import RouterView from "../../../router/RouterView";
// import { observer, inject } from 'mobx-react';


interface Props {
    getclasslist: any,
    classlist: Array<object>,
    isShow: boolean,
    form: any
}

// interface Props extends FormComponentProps {
//     history: any
// }

// @inject('getclasslist')
// @observer

class ClassManagement extends React.Component<Props> {
    // state = {
    //     classlist: [],
    //     isShow: false
    // }
    // handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     this.props.form.validateFieldsAndScroll((err: Error, values: any) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // };
    // componentDidMount() {
    //     this.getlist();
    // }
    // public getlist = async () => {
    //     const { getclasslist } = this.props.getclasslist;
    //     const result = await getclasslist();
    //     if (result.code === 1) {
    //         this.setState({
    //             classlist: result.data
    //         }, () => {
    //             console.log(this.state.classlist);
    //         })
    //     }
    // }
    // public btnClick = () => {
    //     this.setState({
    //         isShow: !this.state.isShow
    //     })
    // }
    public render() {
        return (
            <div>
                <RouterView routes={this.props.children}></RouterView>
            </div>
        )
    }
}

export default ClassManagement;