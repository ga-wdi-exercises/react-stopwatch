
import React, { Component } from 'react';
import './index.css';

const timeEditor = (sec) =>
  Math.floor(sec/3600) + ':' + Math.floor(sec/60) + ':' + ('0' + sec % 60).slice(-2)

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 0,
      timer: null
    };
    this.incrementer = null;
  }

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        sec: this.state.sec + 1
      })
    , 1000);
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      timer: this.incrementer
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      sec: 0
    });
  }

  render() {
    return (
      <div>
      <h1>{timeEditor(this.state.sec)}</h1>
        <div>
          <button onClick={ e => this.handleStartClick(e) }>Start</button>
          <button onClick={ e => this.handleResetClick(e) }>Reset</button>
          <button onClick={ e => this.handleStopClick(e) }>Pause</button>
        </div>
      </div>
    );
  }
}


export default Stopwatch;
