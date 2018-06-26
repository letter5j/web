import React, { Component } from 'react';

import { Table } from 'antd';


const columns = [{
    title: 'class',
    dataIndex: 'class',
    key: 'class',
    // render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Train',
    dataIndex: 'Train',
    key: 'Train',
  }, {
    title: 'Test',
    dataIndex: 'Test',
    key: 'Test',
  }];

const data = [{
    key: '1',
    class: '水泡',
    Train: 3,
    Test: 2,
  }, {
    key: '2',
    class: '瘀傷',
    Train: 44,
    Test: 32,
  }, {
    key: '3',
    class: '蜂窩性組織炎',
    Train: 57,
    Test: 25,
  }, {
    key: '4',
    class: '割傷',
    Train: 70,
    Test: 30,
  }, {
    key: '5',
    class: '糖尿病病足',
    Train: 13,
    Test: 8,
  }, {
    key: '6',
    class: '撕裂傷',
    Train: 6,
    Test: 5,
  }, {
    key: '7',
    class: '口腔潰瘍',
    Train: 46,
    Test: 24,
  }, {
    key: '8',
    class: '縫合傷',
    Train: 41,
    Test: 15,
  }, {
    key: '9',
    class: '擦傷',
    Train: 36,
    Test: 24,
  }, {
    key: '10',
    class: '潰瘍',
    Train: 67,
    Test: 35,
  }, {
    key: '11',
    class: '合計',
    Train: 383,
    Test: 200,
  }];
  
class DataTable extends Component {
    render() {
        return (
        <Table pagination={false} columns={columns} dataSource={data} />
        )
    }
  }
  
export default DataTable;
