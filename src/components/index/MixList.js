import React, { Component } from 'react';
import {Grid,Icon,SegmentedControl ,WingBlank,WhiteSpace} from 'antd-mobile';
import MyNav from './../public/MyNav'
const styles = {
    img: {
        height: '50px',
        width: '50px'
    }
}
const data = [
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>宋河搅拌站</span>,
        to:'/index/mixingStationDetail/001'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>曹武搅拌站</span>,
        to:'/index/mixingStationDetail/002'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>永兴搅拌站</span>,
        to:'/index/mixingStationDetail/003'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>艾普斯搅拌站</span>,
        to:'/index/mixingStationDetail/004'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>曹武搅拌站</span>,
        to:'/index/mixingStationDetail/005'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>曹武搅拌站</span>,
        to:'/index/mixingStationDetail/002'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>永兴搅拌站</span>,
        to:'/index/mixingStationDetail/003'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>艾普斯搅拌站</span>,
        to:'/index/mixingStationDetail/004'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>曹武搅拌站</span>,
        to:'/index/mixingStationDetail/005'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>曹武搅拌站</span>,
        to:'/index/mixingStationDetail/002'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>永兴搅拌站</span>,
        to:'/index/mixingStationDetail/003'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>艾普斯搅拌站</span>,
        to:'/index/mixingStationDetail/004'
    },
    {
        icon: <img style={styles.img} src="http://img2.imgtn.bdimg.com/it/u=2667320096,3309342136&fm=26&gp=0.jpg" alt=""/>,
        text: <span className={'themeGray'}>曹武搅拌站</span>,
        to:'/index/mixingStationDetail/005'
    },
];
export default class Bar extends Component{
    render(){
        return <div className='container'>
            <MyNav>搅拌站列表</MyNav>
            <WhiteSpace />
            <WingBlank>
                <SegmentedControl style={{height:'40px'}} onChange={value=>{
                    console.log(value);
                }} values={['所有的','新加入', '关注的']} />
            </WingBlank>
            <WhiteSpace />
            <Grid data={data} columnNum={3} onClick={(obj)=>{
                this.props.history.push(obj.to);
            }} />
        </div>
    }
}
