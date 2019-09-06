import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table,Button } from 'antd';
import './index.css';

interface ListTypeinfo {
    data: Array<object>;
    questionsType: any;
    key: any;
}

@inject('questionsType')
@observer
class Testlist extends React.Component<ListTypeinfo> {
    state = {
        //  试题类型
        data: []
    };

    columns = [
        {
            title: '数据类型ID',
            dataIndex: 'questions_type_id',
            key: 'questions_type_id'
        },
        {
            title: '类型名称',
            dataIndex: 'questions_type_text',
            key: 'questions_type_text',
        },
        {
            title: 'Action',
            key: 'action'
            
        }
    ];

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.getQuestionsType();
    }

    // 获取考试类型的数据
    getQuestionsType = async () => {
        const { questionsType } = this.props.questionsType;
        const result = await questionsType();
        // {questions_type_id: "774318-730z8m", questions_type_text: "简答题", questions_type_sort: 1}
        this.setState({
            data: result.data
        });
    };

    public render() {
        const { data } = this.state;
        return (
            <div className="TypePage">
                <header className="header">试题分类</header>
                <main className="type-content">
                    <div className="btn-type-add">
                        <Button type="primary" icon="plus" onClick={this.addTypeFn}>
                             添加类型
                        </Button>
                    </div>
                    <Table columns={this.columns} dataSource={data} />
                </main>
            </div>
        );
    }


    // 添加类型的函数
    addTypeFn(){
        console.log(2345)
    }
}

export default Testlist;
