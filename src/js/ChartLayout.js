import React, { Component } from 'react';
import { Layout } from 'antd';
import { Card } from 'antd';
import { Alert } from 'antd';
import { Modal } from 'antd';

import DataTable from './DataTable';
import imgDis from '../images/dis.jpg';
import imgModel from '../images/model.jpg';
import imgResult from '../images/result.jpg';
const { Header, Content, Footer } = Layout;

const responsive =  {
    width: '100%',
    height: 'auto'
}
class ChartLayout extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
    };

    
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file,
            previewVisible: true,
        });
    }

    render() {
        const { previewVisible, previewImage } = this.state;
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '16px 16px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    
                    <Card title="目前模型使用資料分布" bordered={false} style={{ margin: '16px 16px' }}>
                        <DataTable />
                        <img src={imgDis} style={responsive} alt="dis" />
                    </Card>
                    <Card title="使用的模型" bordered={false} style={{ margin: '16px 16px' }}>
                        <Alert
                                message="模型版本"
                                description="2018/06/26"
                                type="info"
                                showIcon
                                />    
                         <img src={imgModel} style={responsive} alt="model" />
                    </Card>
                    <Card title="訓練曲線" bordered={false} style={{ margin: '16px 16px' }}>
                        <img src={imgResult} style={responsive} alt="result" />
                    </Card>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Log Design ©2018 Created by Log
                </Footer>
            </Layout>
        );
    }   
}
export default ChartLayout;
