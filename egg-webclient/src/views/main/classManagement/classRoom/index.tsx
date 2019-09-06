// classRoom
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table,Button ,Divider} from 'antd';
// import './index.css';

interface ProdTypeinfo {
    data: Array<object>;
    questionsType: any;
    key: any;
    addRoom:any
}

@inject('addRoom')
@observer

class ClassRoom extends React.Component<ProdTypeinfo> {

    state = {
        //  试题类型
        data: []
    };


    columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: 'grade_id'
        },
        {
            title: '课程名',
            dataIndex: 'subject_text',
            key: 'subject_id',
        },
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
        this.AddRoom();
    }

    // 获取考试类型的数据
    AddRoom = async () => {
        const { addRoom } = this.props.addRoom;
        const result = await addRoom();
        console.log(result)
        this.setState({
            data: result.data
        });
    };

    public render() {
        let {data} = this.state
        return (
            <div className="TypePage">
                <header className="header">班级管理</header>
                <main className="type-content">
                    <div className="btn-type-add">
                        <Button type="primary" icon="plus">
                             添加班级
                        </Button>
                    </div>
                    <Table columns={this.columns} dataSource={data} />
                </main>
            </div>
        )
    }
}

export default ClassRoom;