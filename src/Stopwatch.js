import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {

  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.setTimeCount = this.setTimeCount.bind(this)
    this.resetTimeCount = this.resetTimeCount.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)

  }


  setTimeCount () {
    this.setState(prevState => ({time: prevState.time + 1}) )
    console.log("Time Count Started.")
    console.log(this.state.time)

    setTimeout(this.setTimeCount, 500)
  }

  startTimer() {
    setTimeout(this.setTimeCount, 500)
  }

  resetTimeCount () {
    this.setState( {time: 0} )
  }

  pauseTimer () {
    console.log("Paused Button Pushed")
    // clearTimeout(setTimeCount)
  }


  render () {

    return (
      <div className="stopwatch">
        <h1> {this.state.time} </h1>
        <div className="controls">
          <button onClick={this.resetTimeCount}>Reset</button>
          <button onClick={() => this.startTimer()}>Start</button>
          <button onClick={() => this.pauseTimer()}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
