import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
    constructor(props){
      super(props)
      this.state = {
        seconds = 0
        paused: true
      }
        this.timerId = null
    }
    handleStart(e){
      if(!this.state.timerId){
        let timerId = setInterval(()=>{
          let timer = this.state.timer + 1
          this.setState({
            timer: timer
            timerId: timerId
          })
        }, 1000)
      }

    }

    handlePause(){

    }

    handleReset(){

  }





  render() {
    return (
      <div className="stopwatch">
        <h1>0</h1>
        <div className="controls">
          <button onClick=onClick()>Reset</button>
          <button onClick=onClick()>Start</button>
          <button onClick=onClick()>Pause</button>
        </div>
      </div>
    );
  }
}


export default Stopwatch;
