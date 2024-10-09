import React, { Component } from 'react';

class ErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment Counter</button>
      </div>
    );
  }
}

export default ErrorComponent;
