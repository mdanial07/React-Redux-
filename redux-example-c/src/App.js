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
    decrement: () => dispatch({ type: 'Decrement' }),
    incrementAgain: function () {
      console.log("incrementAgain");

      return dispatch({ type: 'Increment' });
    }
  };
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          App {this.props.counter}
          <br /><br />
           Event in App.js<br />
          <button onClick={this.props.increment}>Increment </button>
          <button onClick={this.props.decrement}>Decrement </button>
          <button onClick={this.props.incrementAgain}>Increment Again</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
