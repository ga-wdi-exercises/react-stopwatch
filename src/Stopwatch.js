import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = {
      seconds: 0
    }
    this.timer = null
  }
  timerStart(e) {
    e.preventDefault()
    this.timer = setInterval(() => {this.setState({seconds: this.state.seconds += 1})}, 1000)
  }

  timerPause(e) {
    e.preventDefault()
    clearInterval(this.timer)
  }

  


  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
        <div className="controls">
          <button>Reset</button>
          <button onClick = {e => this.timerStart(e)}>Start</button>
          <button onClick = {e => this.timerPause(e)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
