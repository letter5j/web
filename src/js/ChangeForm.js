import React, { Component } from 'react';

import { Select } from 'antd';
import axios from 'axios';


const Option = Select.Option;


const changeFileName = (className, fileName) => {
    axios.post('https://wapi.zio.tw/changeFileName',{
        className: className,
        fileName: fileName
      })
    .then(res => {
        // console.log(res)
    })
}

class ChangeForm extends Component {


    handleChange = (value) => {
        changeFileName(value.key, this.props.item.response.filename)
        this.props.changeFormFeedback(this.props.item)
    }

    render() {
        return (
            <Select labelInValue defaultValue={{ key: this.props.item.response.className }} style={{ width: 120 }} onChange={this.handleChange}>

                <Option value='Cellulitis'>蜂窩性組織炎</Option>
                <Option value='bruises'>瘀傷</Option>
                <Option value='cut'>割傷</Option>
                <Option value='mouth'>口腔潰瘍</Option>
                <Option value='sature'>縫合傷</Option>
                <Option value='scrape'>擦傷</Option>
                <Option value='ulcer'>潰瘍</Option>
            </Select>
        )
    }
    
}


export default ChangeForm;
