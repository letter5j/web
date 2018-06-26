import React, { Component } from 'react';

import { Upload, Icon, Modal } from 'antd';
import { List, Avatar } from 'antd';


class PicturesWall extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        multiple: true
    };

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })
    
    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    action="https://sm.ms/api/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    >
                { uploadButton }
                {/* {fileList.length >= 3 ? null : uploadButton} */}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            
            <List
            itemLayout="horizontal"
            dataSource={fileList}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.url || item.thumbUrl} />}
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={ "預測結果：" + item.response}
                />
              </List.Item>
            )}
            />
            </div>
        )
    };
}

export default PicturesWall;
