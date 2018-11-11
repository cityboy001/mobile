import React, { Component } from 'react';
import { Card, WhiteSpace} from 'antd-mobile'
import Row from './MyRow'
class App extends Component {
    render(){
        return  <div>
            <Card>
                <Card.Body>
                    <Row {...this.props} />
                </Card.Body>
                <Card.Footer  extra={<div>{this.props.status}</div>} />
            </Card>
            <WhiteSpace />
        </div>
    }
}
export default App;