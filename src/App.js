import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/App.css';
// import { Button } from 'antd';

import MainLayout from './js/MainLayout';

class App extends Component {
  render() {
    return (
      <MainLayout />
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <div>
      //     <Button type="primary">Button</Button>
          
      //   </div>
      // </div>
    );
  }
}

export default App;

