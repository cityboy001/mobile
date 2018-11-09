import React, { Component } from 'react';

import { TabBar } from 'antd-mobile';
import Index from './components/index/index.js'
import Detail from './components/index/Detail.js'
import MyOrder from './components/person/MyOrder.js'
import Person from './components/person/index.js'
import './index.css'
import Find from './components/find.js'
import { BrowserRouter as Router, Route, withRouter  } from "react-router-dom";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

class Bar extends Component{
    constructor(props){
        super(props);
    }
    state = {
        selectedTab: '',
        hidden: false,
    };
    render() {
        return <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
        >
            <TabBar.Item
                title='首页'
                key="Life"
                icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.props.location.pathname === '/'}

                onPress={() => {
                    this.props.history.push('/');
                }}
                data-seed="logId"
            >

            </TabBar.Item>
            <TabBar.Item
                icon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                    />
                }
                selectedIcon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                    />
                }
                title="发现"
                key="Koubei"
                selected={this.props.location.pathname.startsWith('/find')}
                onPress={() => {
                    this.props.history.push('/find');
                }}
                data-seed="logId1"
            >

            </TabBar.Item>

            <TabBar.Item
                icon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                    />
                }
                selectedIcon={
                    <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                    />
                }
                title="个人中心"
                key="Friend"
                selected={this.props.location.pathname.startsWith('/person')}
                onPress={() => {
                    this.props.history.push('/person');
                }}
            />


        </TabBar>
    }
}
const RouteBar = withRouter(Bar);
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        };
    }
    render() {
        return (
            <Router>
                <div className='containerBox'>
                    <CacheRoute  path={'/'} exact component={Index} />
                    <Route path={'/detail'} exact component={Detail} />

                    <Route path={'/person'} exact component={Person} />
                    <CacheRoute path={'/person/myOrder'} exact component={MyOrder} />
                    <div className='containerBox' style={{ position:'fixed', height: '50px', width: '100%', bottom: 0 }}>
                        <RouteBar />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
