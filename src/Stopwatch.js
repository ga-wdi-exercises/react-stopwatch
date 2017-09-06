import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {

  constructor(){
    super()

    this.state = {
      time: 0,
      paused: true,
      timerId: null
    }


    this.handleClickStart = this.handleClickStart.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)
    this.handleClickPaused = this.handleClickPaused.bind(this)
  }


  handleClickStart(){
    console.log("handle");
    this.setState({paused: false}, ()=>{




        var x = setInterval(()=>{

          if (!this.state.paused) {
            this.setState({time: this.state.time + 1})
          }
        },1000)


    })
  }

  handleClickReset(){
    this.setState({time: 0, paused: true})
  }

  handleClickPaused(){

      this.setState({paused: !this.state.paused})

  }


  render() {


    return (
      <div className="stopwatch">
        <h1>{this.state.time}</h1>
        <div className="controls">
          <button onClick={this.handleClickReset}>Reset</button>
          <button onClick={this.handleClickStart}>Start</button>
          <button onClick={this.handleClickPaused}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
