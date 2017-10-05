import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      incrementor: 0
    }
    this.handleStart = this.handleStart.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.handleReset = this.handleReset.bind(this)
}
    handleStart(e) {
      this.incrementor = setInterval(() =>
      this.setState({
        timer: this.state.timer + 1
      })
    , 1000);

    }
    handlePause(e) {
      clearInterval(this.incrementor);
      this.setState({
        timer: this.state.timer
      });
    }
    handleReset(e) {
      clearInterval(this.incrementor);
      this.setState({
        timer: 0
      });
    }




  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.timer}</h1>
        <div className="controls">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
