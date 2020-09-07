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
        <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
