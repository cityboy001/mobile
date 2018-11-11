import React, { Component } from 'react';
import { ListView,WhiteSpace,Button,Modal,Toast } from 'antd-mobile';
import Row from './MyRow'
import ResultRow from './ResultRow'
import getObjFormRoute from "../../util/getArrtibuteFormObj";

class App extends Component {

    constructor(props){
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state={
            dataSource
        }
    }
    componentDidMount(){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.props.data)
        })
    }
    render(){
        return <ListView
            style={{marginBottom:'50px'}}
            useBodyScroll
            dataSource={this.state.dataSource}
            pageSize={10}
            renderRow={(obj)=>{
                return <div >
                    <Row onClick={()=>{
                        this.props.history.push({ pathname: "/detail", state: obj});
                    }} {...obj} />
                    <div style={{display:'flex',justifyContent:'space-between',padding:'0 28px 15px' }}>
                        <span>{obj.status}</span>

                        {obj.status==='已经完成任务'?<span></span>:<Button onClick={()=>{
                            Modal.alert("警告","是否通知搅拌站付款？",[
                                {
                                    text:'取消',
                                    onPress(){
                                        Toast.info('您点击了取消');
                                    }
                                },
                                {
                                    text:'确定',
                                    onPress(){
                                        Toast.info('已经通知搅拌站付款');
                                    }
                                }
                            ]);
                        }} inline size={'small'} type={'primary'}>通知搅拌站付款</Button>}

                    </div>
                    <div
                        style={{
                            backgroundColor: '#F5F5F9',
                            height: 8,
                            borderTop: '1px solid #ECECED',
                            borderBottom: '1px solid #ECECED',
                        }}
                    />
                </div>
            }
            }
        />
    };
}

export default App;