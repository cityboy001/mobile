import React, { Component } from 'react';
import MyNav from './../public/MyNav'
export default class Bar extends Component{
    componentDidMount(){

    }
    render(){
        return <div className={'container'}>
            <MyNav>搅拌站详情</MyNav>
            搅拌站编号:
            {
                this.props.match.params.id
            }
        </div>
    }
}