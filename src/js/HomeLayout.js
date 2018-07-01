import React, { Component } from 'react';
import { Layout } from 'antd';
import { Card } from 'antd';
import { Alert } from 'antd';
import { Row, Col } from 'antd';

import axios from 'axios';


import PicturesWall from './PicturesWall';

const { Header, Content, Footer } = Layout;

const getNowTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let day = ("0" + (now.getDate())).slice(-2);
    let hour = ("0" + (now.getHours() )).slice(-2);
    let minute = ("0" + now.getMinutes() ).slice(-2);
    let second = ("0" + now.getSeconds() ).slice(-2);

    return year + '/' + month + '/' + day + ' ' + hour + ':' + minute+ ':' + second
}

class HomeLayout extends Component {
    state = {
        serverStatus: false
    }
    
    componentWillMount = () => {
        axios.get('https://wapi.zio.tw/status')
        .then(res => {
            const status = res.data;
            this.setState({ serverStatus : status });
        })
    }

    render() {
        let time = "確認時間：" + getNowTime()
        return (
            
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '16px 16px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Row type="flex">
                        <Col span={24} lg={12}>
                            
                            <Card title="服務器狀態" bordered={false} style={{ margin: '16px 16px' }}>
                                { this.state.serverStatus ? 
                                    <Alert
                                    message="正常"
                                    description={time}
                                    type="success"
                                    showIcon
                                    /> :
                                    <Alert
                                    message="服務器無法連接"
                                    description={time}
                                    type="error"
                                    showIcon
                                    /> 
                                }
                                
                            </Card>
                        </Col>
                        <Col span={24} lg={12}>
                            <Card title="目前模型資訊" bordered={false} style={{ margin: '16px 16px' }}>
                                <Alert
                                    message="模型版本"
                                    description="2018/06/26"
                                    type="info"
                                    showIcon
                                    />
                            </Card>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Card title="傷口預測" bordered={false} style={{ margin: '16px 16px' }}>
                            <PicturesWall />
                        </Card>
                    </Row>

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Log Design ©2018 Created by Log
                </Footer>
            </Layout>
        );
    }   
}
export default HomeLayout;
