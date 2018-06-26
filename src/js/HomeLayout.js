import React, { Component } from 'react';
import { Layout } from 'antd';
import { Card } from 'antd';
import { Alert } from 'antd';


import PicturesWall from './PicturesWall';

const { Header, Content, Footer } = Layout;

class HomeLayout extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '16px 16px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Card title="目前模型資訊" bordered={false} style={{ margin: '16px 16px' }}>
                        <Alert
                            message="模型版本"
                            description="2018/06/26"
                            type="info"
                            showIcon
                            />
                    </Card>
                    <Card title="傷口預測" bordered={false} style={{ margin: '16px 16px' }}>
                        <PicturesWall />
                    </Card>

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Log Design ©2018 Created by Log
                </Footer>
            </Layout>
        );
    }   
}
export default HomeLayout;
