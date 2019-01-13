import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppLogin, DashBoard} from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={AppLogin} />
          <Route exact path="/dashboard" component={DashBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
