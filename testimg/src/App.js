import React, { Component } from 'react';
import Main from './components/MainComponent';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import { PICTURES } from './shared/pictures';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/upload")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
      }

    componentWillMount() {
    this.callAPI();
  }


  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro"></p>
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
