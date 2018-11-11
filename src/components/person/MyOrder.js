import React, { Component } from 'react';
import {NavBar,Icon,Tabs, Result, WhiteSpace} from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky';

import MyList from './../public/MyList'
function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
const tabs = [
    { title: '所有的' },
    { title: '正在运输中的' },
    { title: '我已经完成的' },
];
const data1 = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '需要沙石50吨',
        des: '高价收购沙石，拖到某地852',
        price:2.9,
        address:'京山某地852',
        status:'正在运输中...',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '任务标题',
        des: '不任务描述任务描述任务描述任务描述任务描述任务描述',
        price:2.5,
        address:'京山某地2',
        status:'正在运输中...'
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '任务标题',
        des: '任务描述任务描述任务描述任务描述任务描述任务描述',
        price:2.7,
        address:'京山某地3',
        status:'已经完成任务'

    },
];
const data2 = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '需要沙石50吨',
        des: '高价收购沙石，拖到某地852',
        price:2.9,
        address:'京山某地852',
        status:'正在运输中...',
        hasInform:false,
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '任务标题',
        des: '不任务描述任务描述任务描述任务描述任务描述任务描述',
        price:2.5,
        address:'京山某地2',
        status:'正在运输中...',
        hasInform:false,
    }
];
const data3 = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '任务标题',
        des: '任务描述任务描述任务描述任务描述任务描述任务描述',
        price:2.7,
        address:'京山某地3',
        status:'已经完成任务',
        hasInform:true,

    },
];
class App extends Component {

    render(){
        return <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}

            >我的任务</NavBar>
            <StickyContainer>
                <Tabs tabs={tabs}
                      initalPage={'t2'}
                      renderTabBar={renderTabBar}
                >
                    <div style={{  backgroundColor: '#fff' }}>
                        <MyList {...this.props} data={data1}/>
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                        <MyList {...this.props} data={data2} />
                    </div>
                    <div style={{  backgroundColor: '#fff' }}>
                        <MyList {...this.props} data={data3} />
                    </div>
                </Tabs>
            </StickyContainer>
        </div>
    }
}
export default App;