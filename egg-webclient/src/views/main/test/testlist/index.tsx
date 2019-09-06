import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table,Button,Modal } from 'antd';
import './index.css';

interface ListTypeinfo {
    data: Array<object>;
    questionsType: any;
    key: any;
    insertQuestionsType:any
}

@inject('questionsType','insertQuestionsType')
@observer
class Testlist extends React.Component<ListTypeinfo> {
    state = {
        //  试题类型
        data: [],
        visible: false,
        typeName:""
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
        const data = result.data.map((item:any,index:number)=>{
             return {
                 key:index,
                 questions_type_id:item.questions_type_id,
                 questions_type_text:item.questions_type_text,
                 questions_type_sort:item.questions_type_sort
             }
        })
        this.setState({
            data
        });
    };

    // 添加试题类型
     AinsertQuestionsType= async (params:any)=>{
        const { insertQuestionsType } = this.props.insertQuestionsType;
        const result = await insertQuestionsType(params);
     }

    public render() {
        const { data,visible } = this.state;
        return (
            <div className="TypePage">
                <header className="header">试题分类</header>
                <main className="type-content">
                    <div className="btn-type-add">
                        <Button type="primary" icon="plus" size="large" onClick={this.showModal}>
                             添加类型
                        </Button>
                        <Modal
                            title="创建新类型"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            className="anyd-modal"
                            okText="确定"
                            cancelText="取消"
                            >
                            <input type="text" placeholder="输入类型名称" value={this.state.typeName} onChange={(e:any)=>{
                                 this.setState({
                                    typeName:e.target.value
                                 })
                            }}/>
                        </Modal>
                    </div>
                    <Table columns={this.columns} dataSource={data}/>
                </main>
            </div>
        );
    }


    // 添加类型的函数
    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
      handleOk = (e:any) => {
        let valueName = this.state.typeName;
        let addEXamType = {
            text:valueName,
            sort: this.state.data.length + 1
        }
        // questions_type_text: "简答题", questions_type_sort: 1
        this.AinsertQuestionsType(addEXamType)
        this.setState({
          visible: false,
          typeName:''
        });

        // 强制刷新页面
        window.location.reload()
      };
    
      handleCancel = (e:any) => {
        this.setState({
          visible: false,
          typeName:''
        });
      };
    
}

export default Testlist;
