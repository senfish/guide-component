import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Button } from 'antd';
import './index.less';
import 'antd/dist/antd.css';

const App = () => {
  return (<div className='app'>
    <div className='app-content'>
      <h2>人员管理</h2>
      <Input placeholder='请输出搜索值' />
      <Button type='primary'>新增</Button>
      <Input placeholder='请输出搜索值' />
      <Button type='primary'>删除</Button>
    </div>
  </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));