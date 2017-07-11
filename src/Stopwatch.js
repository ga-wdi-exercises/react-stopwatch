import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {

  constructor(){
    super()
    this.state = {
      counter: 0,paused:false
    }
  }
  resetFunction(){
    console.log("reset");
    this.setState({
      counter:0,paused:null
    })
  }
  startFunction(paused){
    console.log("start");
    if (paused){
      setInterval( function() {
        this.setState({
          counter: this.state.counter + 1
        })
      }.bind(this), 1000 )
    }
    else {
      this.setState({
        counter: 0
      })
    }
    // this.setState({
    //   counter: setInterval(function(){this.state.counter + 1}.bind(this), 1000)
    // })
    // this.pauseFunction()
  }
  pauseFunction(counter){
    console.log("pause");
    this.setState({
      counter:this.state.counter,paused:null
    })
  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={(e)=>this.resetFunction(e)}>Reset</button>
          <button onClick={(e)=>this.startFunction(e)}>Start</button>
          <button onClick={(e)=>this.pauseFunction(e)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
