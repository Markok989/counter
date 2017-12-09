// Intentionally left blank.
import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterContainer extends Component {
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
            <Counter
                count={count}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onReset={this.handleReset}
            />
        );
    }
}
