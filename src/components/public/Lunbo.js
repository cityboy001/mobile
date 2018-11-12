import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
class App extends Component {
    state={
        data:['通知1','通知二','通知三']
    };
    render() {
        return (
            <div style={{height: '30vh'}}>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: '30vh' }}
                        >
                            <div style={{height:'100%',lineHeight:'30vh',textAlign:'center'}}>
                                {val}
                            </div>
                        </a>
                    ))}
                </Carousel>
            </div>

        );
    }
}
export default App;