import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { WingBlank  } from 'antd-mobile';
import ProductList from './ProductList.js'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div style={{backgroundColor:'white',padding:'20px 0'}}>
            <WingBlank >
                <div style={{display:'flex'}}>
                    <div onClick={()=>{
                        this.props.history.push('/index/mixList');
                    }} style={{width:'30%',textAlign:'center'}}>
                        <img style={{width:'60px',height:'60px',borderRadius:'50%'}} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>
                        <div><b>搅拌站</b></div>
                    </div>
                </div>
            </WingBlank>
            <ProductList {...this.props}/>
        </div>);
    }
}

export default App;