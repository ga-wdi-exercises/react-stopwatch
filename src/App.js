import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="stopwatch">
        <h1>0</h1>
        <div className="controls">
          <button>Reset</button>
          <button>Start</button>
          <button>Pause</button>
        </div>
      </div>
    );
  }
}

export default App;
