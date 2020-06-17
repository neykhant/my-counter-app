import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
  
  render() {

    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">Reset</button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            key={counter.id}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default counters;
