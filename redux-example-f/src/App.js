import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

function mapStateToProps(state) {
    return {
        counter: state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: 'Increment' }),
        decrement: () => dispatch({ type: 'Decrement_with_value',val:4 }),
        incrementAgain : function (){
          console.log("Incrementing value ");
          return dispatch({ type: 'Increment_with_value',val:3 });
        }
    };
}

class App extends Component {
  render() {
    return (
      <div >
        App {this.props.counter}  
        <div>
          <br/>
          Event in App.jsx <br/>
          
          <button onClick={this.props.increment}>Increment</button><br/>
          <button onClick={this.props.decrement}>Decrement value with 4</button><br/>
          <button onClick={this.props.incrementAgain}>Increment value with 3</button><br/>
        </div>      
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);