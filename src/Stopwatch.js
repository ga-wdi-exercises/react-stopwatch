import React, { Component } from "react";
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      pause: true
    };
  }

  handleStart = () => {
    this.interval = setInterval(this.handleTime, 1000);
  };

  handleReset = () => {
    clearInterval(this.interval);
    this.setState({ time: { seconds: 0, minutes: 0, hours: 0 }, pause: true });
  };

  handlePause = () => {
    const { pause } = this.state;
    if (pause) {
      this.handleStart();
    } else {
      clearInterval(this.interval);
      this.setState({ pause: true });
    }
  };

  handleTime = () => {
    let {
      time: { seconds, minutes, hours }
    } = this.state;

    seconds = ++seconds;
    if (seconds === 60) {
      seconds = 0;
      minutes = ++minutes;
    } else if (minutes === 60) {
      seconds = 0;
      minutes = 0;
      hours = ++hours;
    }

    this.setState({ time: { seconds, minutes, hours }, pause: false });
  };

  getFormattedTime = () => {
    const {
      time: { hours, minutes, seconds }
    } = this.state;
    return `${this.formatNumber(hours)}:${this.formatNumber(
      minutes
    )}:${this.formatNumber(seconds)}`;
  };

  formatNumber = number => {
    return number < 10 ? "0" + number : number;
  };

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.getFormattedTime()}</h1>
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
