import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0,
      pause: false

    }
    this.handlerStart = this.handlerStart.bind(this)
    this.handlerPause = this.handlerPause.bind(this)
    this.handlerReset = this.handlerReset.bind(this)
    this.incrementTimer = this.incrementTimer.bind(this)
  }
  incrementTimer(){
    if (!this.state.pause) {
      this.setState(prevState => ({ time: prevState.time + 1}))
      window.setTimeout(this.incrementTimer, 1000)
   }
  }

  handlerStart(e) {
    e.preventDefault()
    //console.log(e)
    window.setTimeout(this.incrementTimer, 1000)
    this.setState({
      pause: false
    })
  }

  handlerPause(e) {
    e.preventDefault()
    this.setState({
      pause: true
    })

  }

  handlerReset (e) {
    this.setState({
      time: 0
    })
  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.time}</h1>
        <div className="controls">
          <button onClick={this.handlerReset}>Reset</button>
          <button onClick={this.handlerStart}>Start</button>
          <button onClick={this.handlerPause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
