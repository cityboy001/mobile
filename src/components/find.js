import React, { Component } from 'react';
import { Carousel, WingBlank,NoticeBar } from 'antd-mobile';
import Lunbo from './public/Lunbo'
class App extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading

    }
    render() {
        return (
            <div>
                <Lunbo />
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                </NoticeBar>
            </div>
        );
    }
}
export default App;