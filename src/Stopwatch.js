import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(){
    super()
    this.state = {
      seconds: 0,
      paused: true
    }
    this.incrementer = null;
  }
  handleStart(e){
    this.incrementer = setInterval(()=>
      this.setState({
        seconds: this.state.seconds + 1,
        paused: false
      })
    ,1000)
  }
  handlePause(e){
    let paused = !this.state.paused
    if(paused){
      clearInterval(this.incrementer)
      this.setState({
        paused,
      })
    }
    else{
      this.handleStart()
    }
  }
  handleReset(e){
    clearInterval(this.incrementer)
    this.setState({
      seconds: 0,
      paused: true
    })
  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
        <div className="controls">
          <button>Reset</button>
          <button>Start</button>
          <button>Pause</button>
          <button onClick={e => this.handleReset(e)}>Reset</button>
          <button onClick={e => this.handleStart(e)}>Start</button>
          <button onClick={e => this.handlePause(e)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
