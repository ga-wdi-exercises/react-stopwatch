import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor (props) {
      super(props)
      this.state = {count: 1}
    }
    componentWillUnmount () {
      clearInterval(this.timer)
    }
    tick () {
      this.setState({count: (this.state.count + 1)})
    }
    startTimer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 100)
    }
    stopTimer () {
      clearInterval(this.timer)
    }
    render () {
      return (
        <div className='controls'>
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Start</button>
            <button onClick={this.stopTimer.bind(this)}>Stop</button>
          </div>
        </div>

    );
  }
}

export default App;
