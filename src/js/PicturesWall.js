import React, { Component } from 'react';

import { Upload, Icon, Modal } from 'antd';
import { List, Avatar } from 'antd';
import { Popover, Button } from 'antd';
import { Alert } from 'antd';

import ChangeForm from './ChangeForm';


const translateClass = (name) => {
    let className = ['Cellulitis', 'bruises', 'cut', 'mouth', 'sature', 'scrape', 'ulcer']
    let classNameC = ['蜂窩性組織炎', '瘀傷', '割傷', '口腔潰瘍', '縫合傷', '擦傷', '潰瘍']
    let index = className.indexOf(name);

    return classNameC[index]
}

class PicturesWall extends Component {
    
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        multiple: true,
        uidList: []
    };

    

    changeForm = (item) => {
        return (
            
            <ChangeForm changeFormFeedback={this.changeFormFeedback} item={item} />
        )
    };
    
    changeFormFeedback = (item) => {

        let newList = this.state.uidList
        newList.push(item.uid)
        this.setState({
            uidList : newList
        });
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
                    action="https://wapi.zio.tw/getresult"
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
                        {item.response ?
                        
                            [
                                <List.Item.Meta
                                key='55' avatar={<Avatar src={item.url || item.thumbUrl} />}
                                title={<a href={item.url || item.thumbUrl}>{item.name}</a>}
                                description={ "預測結果：" + translateClass(item.response.className)}
                                />
                                ,(this.state.uidList.includes(item.uid) ? 
                                <Alert key='556' message="感謝您幫助改善模型！" type="success" />
                                :
                                <Popover key='557' content={this.changeForm(item)} title="請幫忙重新分類" trigger="click">
                                    <Button>分類結果錯誤嗎？</Button>
                                </Popover>
                            )]
                            :null
                        }
                        
                    
                </List.Item>
                )}
                />
            </div>
        )
    };
}

export default PicturesWall;
