import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 0,
      paused: true,
    }
    this.timerId = null
  }

  handleStart(e){
    if(!this.timerId){
      this.timerId = setInterval( _ => this.updateTime(), 1000 )
    }
  }

  handlePause(e){
    let paused = !this.state.paused
    if(paused){
      this.resetInterval()
      this.setState({
        paused,
      })
    } else {
      this.handleStart()
    }
  }

  resetInterval(){
    clearInterval(this.timerId)
    this.timerId = null
  }

  handleReset(e){
    this.resetInterval()
    this.setState({
      seconds: 0,
      paused: true
    })
  }

  updateTime(){
    this.setState({
      seconds: this.state.seconds + 1,
      paused: false,
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
        <div className="controls">
          <button onClick={ e => this.handleReset(e) }>Reset</button>
          <button onClick={ e => this.handleStart(e) }>Start</button>
          <button onClick={ e => this.handlePause(e) }>Pause</button>
        </div>
      </div>
    );
  }
}

export default App;
