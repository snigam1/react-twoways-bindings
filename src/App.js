import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Parent1} from './components/parent1'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent1/>
      </div>  
    );
  }
}

export default App;
