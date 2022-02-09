import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "no name",
    };
  }
  // ----------------------------
  increment = () => {
    // this.state.count = this.state.count + 1;
    this.setState({ count: this.state.count + 1 });
  };
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  // --------------------------
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <h1>{this.state.count}</h1>
        <h2>enter your name please:</h2>
        <input type="text" onChange={this.handleChange} />
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default Counter;
