import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      timerId: null,
      paused: false
    }
    this.checkZero()
  }

  checkZero(){
    if(document.getElementById('timer').innerHTML === "Timer: 0"){
      document.getElementById('timer').classList.toggle("zero")
    }
  }

  displayButtons(){
    document.getElementById('pause').style.display = "inline"
    document.getElementById('reset').style.display = "inline"
  }

  startTimer(){
    this.displayButtons()
    this.checkZero()
    this.setState({
      paused: false,
      timerId: setInterval(() => {
        this.state.count ++
        document.getElementById('timer').innerHTML = `Timer: ${this.state.count}`
      }, 1000)
    })
  }

  pauseTimer(){
    if (!this.state.paused){
      clearInterval(this.state.timerId)
      this.setState({
        paused: true
      })
    } else {
      this.startTimer()
    }
  }

  resetTimer(){
    this.setState({
      count: 0
    })
    document.getElementById('timer').innerHTML = `Timer: ${this.state.count}`
    this.checkZero()
  }

  render() {
    return (
      <div className="controls">
        <button id="reset" onClick={() => this.resetTimer()}>Reset</button>
        <button id="start" onClick={() => this.startTimer()}>Start</button>
        <button id="pause" onClick={() => this.pauseTimer()}>Pause</button>
      </div>
    );
  }
}

export default Timer;
