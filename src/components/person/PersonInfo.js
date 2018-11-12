import React, { Component } from 'react';
import {Icon, List, NavBar,Modal} from 'antd-mobile';
import MyNav from './../public/MyNav';
const Item = List.Item;
const prompt = Modal.prompt;
export default class PersonInfo extends Component {
    state={
        Modal: true
    };
    render(){
        return <div className={'container'}>
            <MyNav>个人信息</MyNav>

            <List  >
                <Item arrow="horizontal" onClick={() => {
                    prompt(
                        '修改名字',
                        '请输入新的名字',
                        [
                            { text: '取消' },
                            { text: '提交', onPress: password => {} },
                        ],
                        'secure-text',
                    )
                }} >名字</Item>
                <Item arrow="horizontal" extra='130 **** 0000' onClick={() => {
                    prompt(
                        '修改手机号',
                        '请输入旧的手机号',
                        [
                            { text: '取消' },
                            { text: '提交', onPress: password => {
                                    prompt(
                                        '修改手机号',
                                        '请输入新的手机号',
                                        [
                                            { text: '取消' },
                                            { text: '提交', onPress: password => {

                                                } },
                                        ],
                                        'secure-text',
                                    )
                                } },
                        ],
                        'secure-text',
                    )
                }} >手机号</Item>
                <Item arrow="horizontal" onClick={() => {
                    prompt(
                        '修改密码',
                        '请输入旧的密码',
                        [
                            { text: '取消' },
                            { text: '提交', onPress: password => {
                                    prompt(
                                        '修改密码',
                                        '请输入新的密码',
                                        [
                                            { text: '取消' },
                                            { text: '提交', onPress: password => {
                                                    prompt()
                                                } },
                                        ],
                                        'secure-text',
                                    )
                                } },
                        ],
                        'secure-text',
                    )
                }} >密码</Item>
                <Item arrow="horizontal" extra='GT9800' onClick={() => {
                    prompt(
                        '修改车牌号',
                        '请输入新的车牌号',
                        [
                            { text: '取消' },
                            { text: '提交', onPress: password => {} },
                        ],
                        'secure-text',
                    )
                }} >车牌号</Item>
                <Item arrow="horizontal" onClick={() => {
                    prompt(
                        '修改手银行卡号',
                        '请输入新的银行卡号',
                        [
                            { text: '取消' },
                            { text: '提交', onPress: password => {} },
                        ],
                        'secure-text',
                    )
                }} >银行卡号</Item>
            </List>
        </div>
    }
}