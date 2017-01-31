import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      secondsElapsed: 0
    };
    this.incrementer = null;
  }

  getSeconds() {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }

  getMinutes() {
    return Math.floor(this.state.secondsElapsed / 60);
  }

  handleStartClick(e) {
    var _this = this;
    this.incrementer = setInterval(function() {
        _this.setState({
          secondsElapsed: _this.state.secondsElapsed + 1
        });
      }, 1000);
  }

  handleStopClick(e) {
    clearInterval(this.incrementer);
    this.setState({
        lastClearedIncrementer: this.incrementer
      });
    }

    handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: []
    });
  }


  render() {
    return (
      <div className="App">
        <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
        <button type="button" onClick={e => this.handleStartClick(e)}>Start</button>
        <button type="button" onClick={e => this.handleStopClick(e)}>Stop</button>
        <button type="button" onClick={e => this.handleResetClick(e)}>Reset</button>
      </div>
    );
  }
}

export default App;
