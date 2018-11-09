import React, { Component } from 'react';
import { List ,Grid} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
const data = [{icon:require('./../../assert/images/order.svg'),text:<span className={'themeGray'}>我的订单</span>}];
class App extends Component {
    render(){
        return <div>
            {/*<List renderHeader={() => '个人中心'} className="my-list">*/}
                {/*<Item arrow="horizontal"  onClick={() => {*/}
                    {/*this.props.history.push('person/myOrder');*/}
                {/*}}>我的订单</Item>*/}
            {/*</List>*/}
            <Grid data={data} columnNum={3} square />
        </div>
    }
}
export default App;