import React, { Component } from 'react';
import {Grid,Icon,NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
let MyNav = ({history,children,rightContent})=>{
    return <NavBar mode='light'
                   icon={<Icon size={'lg'} type="left"/>}
                   onLeftClick={() => { window.history.back()}}
                   rightContent={rightContent}
    >{children}</NavBar>
}
export default withRouter(MyNav);