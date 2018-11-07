import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

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
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'40vh',width:'100%',backgroundColor:'gray',}}>
                                通知：{val}
                            </div>
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}
export default App;