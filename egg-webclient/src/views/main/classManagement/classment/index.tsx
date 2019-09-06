// classment
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table,Button ,Divider} from 'antd';
// import './index.css';

interface ClassRoominfo {
    data: Array<object>;
    questionsType: any;
    key: any;
    addGide:any
}

@inject('addGide')
@observer

class Classment extends React.Component<ClassRoominfo> {

    state = {
        //  试题类型
        data: []
    };


    columns = [
        {
            title: '教室号',
            dataIndex: 'room_text',
            key: 'room_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text:any, record:any) => (
              <span>
                <a>修改 {record.name}</a>
                <Divider type="vertical" />
                <a>删除</a>
              </span>
            ),
          },
    ];

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.AddGide();
    }

    // 获取考试类型的数据
    AddGide = async () => {
        console.log(this.props)
        const { addGide } = this.props.addGide;
        const result = await addGide();
        console.log(result)
        this.setState({
            data: result.data
        });
    };

    public render() {
        let {data} = this.state
        return (
            
            <div className="TypePage">
            <header className="header">教室管理</header>
            <main className="type-content">
                <div className="btn-type-add">
                    <Button type="primary" icon="plus">
                         添加教室
                    </Button>
                </div>
                <Table columns={this.columns} dataSource={data} />
            </main>
        </div>
        )
    }
}

export default Classment;