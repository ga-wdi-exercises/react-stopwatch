import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      started: false
    }
    // this.timer = this.timer.bind(this)
    this.onStart = this.onStart.bind(this)
    this.onPause = this.onPause.bind(this)
    this.onReset = this.onReset.bind(this)  
  }
  
  

  //componentDidMount
  componentDidMount() {
    // window.addEventListener(() => {
      setInterval(() => {
        if (this.state.started === true) {        
          let newTime = this.state.time + 1
          this.setState({
            time: newTime
          })
        }
      }, 1000)
    // })
  }



  //componentWillUnmount
  onStart (e) {
    console.log('start')
    this.setState({
      started: true
    })
  }
  onPause (e) {
    console.log('pause')
    this.setState({
      started: false
    })
  }
  onReset (e) {
    console.log('reset')
    this.setState({
      started: false,
      time: 0
    })
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.time}</h1>
        <div className="controls">
          <button onClick={this.onReset}>Reset</button>
          <button onClick={this.onStart}>Start</button>
          <button onClick={this.onPause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
