import * as React from 'react';
import '../index.css';
import { Form } from 'antd';
import { inject, observer } from 'mobx-react';
import { FormComponentProps } from 'antd/lib/form';
import Adduser from './adduser';
import Addshen from './addshen';
import Addapi from './addapi';
import Addviews from './addviews';
import Setapi from './setapi';
import SetId from './setId';

interface Props {
    props: any,
    addUser: any,
    userlist: Array<object>,
    user:any
}

interface Props extends FormComponentProps {
    form: any
}

@inject('user')
@observer

class Management extends React.Component<Props> {

    public render() {
        return (
            <div className='wrap'>
                <div className='h2'>添加用户</div>
                <div className='contentmodule'>
                    <Adduser />
                    <Addshen />
                    <Addapi />
                    <Addviews />
                    <Setapi />
                    <SetId />
                </div>
            </div>
        )
    }
}

export default Form.create()(Management);