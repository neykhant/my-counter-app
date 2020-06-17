import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter( counter => counter.id !== counterId );
    this.setState({ counters:counters })
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;

    this.setState({ counters });
  }
// handleIncrement = () => {
//       this.setState({ value: this.state.value + 1 });
//   }
  handleReset = ( ) => {
    const counters = this.state.counters.map( counter => {
      counter.value = 0;
      return counter;
    })

    this.setState({counters});
  }


  render() {
    return (
      <div>
        <NavBar 
        totalCounter={this.state.counters.filter(c => c.value > 0 ).length}
        />
        <main className="container">
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
