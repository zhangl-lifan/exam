import { Button, Radio, Input, Select } from 'antd';
import * as React from 'react';
let { Option } = Select;
interface TabProps {
    IDlist?: any
}

class Usertab extends React.Component<TabProps>{
    render() {
        let { IDlist } = this.props;
        return <div>
            <Select style={{ width: 160 }} value="请选择身份id" className='selectID'>
                {
                    IDlist && IDlist.map((item: any) => {
                        return <Option key={item.identity_id}>{item.identity_text}</Option>
                    })
                }
            </Select>
            <Input placeholder='请输入用户名' className='ipts'/>
            <Input placeholder='请输入用密码' className='ipts'/>
            <div className='btnbox'>
                            <Button type="primary" className='affirmbtn'>确认</Button>
                            <Button>重置</Button>
                        </div>
        </div>
    }
}
export default Usertab;