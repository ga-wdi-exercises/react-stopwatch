import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Stopwatch extends Component {
  constructor(props) {
      super(props);
      this.state = {
        secondsElapsed: 0,
      }
    }

  getSeconds(){
    return ("0" + this.state.secondsElapsed % 60).slice(-2)
  }

  getMinutes(){
    return Math.floor(this.state.secondsElapsed/60)
  }

  handleStartClick(){
    this.incrementer = setInterval(() =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      }), 1000);
  }

  handlePauseClick(){
    clearInterval(this.incrementer)
  }

  handleResetClick(){
    clearInterval(this.incrementer)
    this.setState({
      secondsElapsed: 0
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Juliet's Stopwatch</h2>
        </div>
        <h1>{this.getMinutes()}:{this.getSeconds()}</h1>

        <button type="button" onClick={this.handleStartClick.bind(this)}>START</button>
        <button type="button" onClick={this.handlePauseClick.bind(this)}>PAUSE</button>
        <button type="button" onClick={this.handleResetClick.bind(this)}>RESET</button>
      </div>
    );
  }
}

export default Stopwatch;
