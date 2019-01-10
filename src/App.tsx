import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppLogin} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Please login to go-bookie:
          <AppLogin/>
          <button>Continue with facebook</button>
        </header>
      </div>
    );
  }
}

export default App;
