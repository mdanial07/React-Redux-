import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    counter: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'Increment' }),
    decrement: () => dispatch({ type: 'Decrement_with_value', val: 4 }),
    incrementAgain: function () {
      console.log("Incrementing value ");
      return dispatch({ type: 'Increment_with_value', val: 3 });
    },

    incrementWithValue: function (value) {
      console.log("Incrementing with value");
      return dispatch({ type: 'Increment_with_value', val: value });
    }
  };
}


class App extends Component {
  constructor() {
    super();
    this.state = {

      counterVal: null,
      passVal: 0
    };
  }
  valueChange(event) {
    this.setState({
      counterVal: parseInt(event.target.value)

    });
  }

  handelClick() {
    this.props.Incrementwithvalue(this.state.counterVal);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          App {this.props.counter}
          <br /><br />
          Event in App.js<br />
          <input type="number" onChange={this.valueChange.bind(this)} /><br />
          <button onClick={this.handelClick.bind(this)}>Increment User Input</button>
          <button onClick={this.props.increment}>Increment </button>
          <button onClick={this.props.decrement}>Decrement </button>
          <button onClick={this.props.incrementAgain}>Increment Again</button>
        </div>

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
