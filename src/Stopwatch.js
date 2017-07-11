import React, { Component } from 'react';
import "./Stopwatch.css"




class Stopwatch extends Component {


constructor(time) {
  super(time);
  this.state = {
    onOff: false,
    timePassed: 0,
  };
}
binding(anything){
  return anything + (".bind")
}

seconds() {
  return (timePassed + this.state.timePassed + 1)
}

resetButton(){
  return timePassed = 0
}
startButton(){
  this.setTimeout(){
    this.setState({timePassed: (this.state.passing + timePassed)})
  }
}


  render() {

    let passing = function() {

    if (timePassed == 1000) {

        timePassed = 0;

    } else {

        timePassed += 1;

   }

    return (
      <div className="stopwatch">
        <h1>0</h1>
        <div className="controls">
          <button id="Reset">Reset</button>
          <button id="start">Start</button>
          <button id="Pause">Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
