import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,PullToRefresh,ListView,WingBlank  } from 'antd-mobile';
import Lunbo from './Lunbo.js'
import ProductList from './ProductList.js'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <Lunbo />
            <ProductList {...this.props}/>
        </div>);
    }
}

export default App;