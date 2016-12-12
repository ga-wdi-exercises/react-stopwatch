import React, { Component } from 'react';
import './App.css';

class Timer extends Component {

  constructor(props){
    super()
    this.state = {
      counter: 0,
      interval: null
    }
  }

  start(e) {
    e.preventDefault()
    var otherthis = this;
    this.state.interval = setInterval(function(){
      otherthis.setState({
        counter: otherthis.state.counter + 1
      });
    }, 1000)
  }

  pause(e) {
    e.preventDefault()
    clearInterval(this.state.interval);
  }

  reset(e) {
    e.preventDefault()
    clearInterval(this.state.interval);
    this.setState({
      counter: 0
    })
  }

  render() {
    return (
      <div>
      <h1>Timer</h1>
      <h1 id="timer">{this.state.counter}</h1>
      <button onClick={(e) => this.start(e)} type="submit">Start</button>
      <button onClick={(e) => this.pause(e)} type="submit">Pause</button>
      <button onClick={(e) => this.reset(e)} type="submit">Reset</button>
      </div>
    );
  }
}

export default Timer;
