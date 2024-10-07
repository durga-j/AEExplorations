import React from "react";

class InheritanceP extends React.Component {
  handleClick() {
    console.log("Button clicked");
  }

  render() {
    return <button onClick={this.handleClick}>Base Button</button>;
  }
}

class Inheritance extends InheritanceP {
  render() {
    return (
      <button onClick={this.handleClick}>
        Button
      </button>
    );
  }
}

export default Inheritance;
