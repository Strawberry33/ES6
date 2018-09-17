import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Class1 from './component/Class1'
import Class2 from './component/Class2'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
 } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="/class1">class1</Link> |
        <Link to="/class2">class2</Link> |
        <Route path="/class1" component={Class1}/>
        <Route path="/class2" component={Class2}/>
      </div>
      </Router>
    );
  }
}

export default App;
