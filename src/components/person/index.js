import React, {Component} from 'react';
import {List, Grid,Icon} from 'antd-mobile';

const Item = List.Item;
const data = [
    {
        icon: require('./../../assert/images/good.svg'),
        text: <span className={'themeGray'}>送货订单</span>,
        to:'/person/myOrder'
    },
    {
        icon: require('./../../assert/images/consumption.svg'),
        text: <span className={'themeGray'}>消费订单</span>,
        to:'/person/myOrder'
    },
    {
        icon: require('./../../assert/images/getMoney.svg'),
        text: <span className={'themeGray'}>提现记录</span>,
        to:'/person/myOrder'
    },
    {
        icon: require('./../../assert/images/langu.svg'),
        text: <span className={'themeGray'}>评价记录</span>,
        to:'/person/myOrder'
    }
];

class App extends Component {
    render() {
        return <div>
            <div onClick={()=>{
                this.props.history.push("/person/info");
            }} style={{display:'flex',justifyContent:'space-between',padding:'30px',backgroundColor:'white',marginBottom:'10px'}} >
                <div style={{display:'flex'}}>
                    <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <div style={{paddingLeft:'10px'}}>
                        <div style={{fontSize:'18px',fontWeight:'bold'}}><span>杨洋</span></div>
                        <div></div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Icon  size={'lg'} type={'right'} />
                </div>
            </div>
            <Grid onClick={(e)=>{
               this.props.history.push('/person/myOrder');
            }} data={data} columnNum={3} square/>
        </div>
    }
}

export default App;