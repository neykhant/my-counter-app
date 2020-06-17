import React, { Component } from "react";

class Counter extends Component {

  // componentDidUpdate(prevprops, prevstate) {
  //   console.log("props", prevprops);
  //   console.log("propstate", prevstate);
  // }

  // componentWillUnmount() {
  //   console.log("unmount");
  // }

  render() {

    const { onIncrement, counter, onDelete } = this.props;

    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm "
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    const { counter } = this.props;
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { counter } = this.props; 
    const value = counter.value;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
