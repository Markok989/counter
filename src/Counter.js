import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  }
  /*
   constructor() {
     super();
 
     this.state = {
       count: 54
     };
 
     // this.hanfleIncrement = this.hanfleIncrement.bind(this);
   }
 */

  // strelica zamenjuje bind. (bind-ovanje metode)
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  // strelica zamenjuje bind. (bind-ovanje metode)
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  // strelica zamenjuje bind. (bind-ovanje metode)
  handleReset = () => {
    this.setState({
      count: 0
    });
  }


  render() {
    const { count } = this.state;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement} className="full-width">Increment</button>
        <button onClick={this.handleDecrement} className="full-width">Decrement</button>
        <button onClick={this.handleReset} className="full-width">Reset</button>
      </section>
    );
  }
}
