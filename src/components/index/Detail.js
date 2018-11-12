import React, {Component} from 'react';
import {Card, Modal, NavBar, Icon,Button,Toast,DatePicker } from 'antd-mobile'
const alert = Modal.alert;
function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
class App extends Component {
    constructor(props) {
        super(props);
    }
    state={
        modal1:false,
        date:now
    };
    componentDidMount(){
        console.log(this.props);
    }
    onClose = key  => {
        this.setState({
            [key]: false,
        });
    };
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    };
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    };

    render() {
        const obj = this.props.location.state;

        return <div>
            <Modal
                popup
                visible={this.state.modal1}
                onClose={()=>{this.onClose('modal1')}}
                animationType="slide-up"
            >
                <DatePicker
                    onDismiss={()=>{this.onClose('modal1');}}
                    onOk={(val)=>{

                        alert('送达时间已经确认','是否确认接单？', [
                            { text: '取消', onPress: () => {
                                Toast.info('您取消了接单');
                                setTimeout(()=>{
                                    this.onClose('modal1');
                                },500) } },
                            { text: '确认', onPress: () => {
                                Toast.info('您接下了此单，将于'+val.toLocaleString()+'送达');
                                setTimeout(()=>{
                                    this.props.history.push('/person/myOrder');
                                    this.onClose('modal1');

                                },500)
                            } },
                        ])
                    }}
                    minDate={new Date()}
                    onChange={date => this.setState({ date })}
                    value={this.state.date}
                >
                    <Button >选择送达时间</Button>
                </DatePicker>
            </Modal>
            <NavBar mode='light' icon={<Icon size={'lg'} type="left"/>}
                    onLeftClick={() => { window.history.back()}}
                    rightContent={[
                        <Icon key="1" type="ellipsis"/>,
                    ]}
            >任务详情</NavBar>
            <Card full>
                <Card.Header
                    title={<div><h4>{obj.title}</h4><span><b>发布时间</b>：<span style={{fontSize:'12px'}}>2018/5/25 13:05:14</span></span></div>}
                    thumb={obj.img}
                    thumbStyle={{width:'84px',height:'84px'}}
                />
                <Card.Body>
                    <div style={{padding:'20px 0'}}>
                        <h5>任务描述：</h5>
                        <p>{obj.des}</p>
                        <h5>备注：</h5>
                        <p>此次必须要5年以上的老司机才能接</p>
                    </div>
                    <Button disabled={obj.status} onClick={ this.showModal('modal1') } className={'am-button-primary'} >我要接单</Button>
                </Card.Body>
            </Card>
        </div>
    }
}

export default App;