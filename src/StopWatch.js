import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
    this.timer = null;
  }

  handleStartClick() {
    this.timer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      })
    , 1000);
  }

  handleStopClick() {
    clearInterval(this.timer);
  }

  handleResetClick() {
    clearInterval(this.timer);
    this.setState({
      secondsElapsed: 0,
    });
  }

  render(){
    return(
      <div className="stopWatch">
        <h2>{this.state.secondsElapsed}</h2>
        <button type="button" onClick={this.handleStartClick.bind(this)}>Start</button>
        <button type="button" onClick={this.handleStopClick.bind(this)}>Stop</button>
        <button type="button" onClick={this.handleResetClick.bind(this)}>Reset</button>
      </div>
    )
  }
}
export default StopWatch;
