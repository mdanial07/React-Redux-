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
        },

        incrementWithValue : function (value){
          console.log("Incrementing with value");
          return dispatch({ type: 'Increment_with_value',val:value });
        }
    };
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      counterVal : 0
    };
  }
  valueChange(event){
    this.setState({counterVal: parseInt(event.target.value)});
  }

  handelClick(){
    this.props.incrementWithValue(this.state.counterVal);
  }
  render() {
    return (
      <div >
        App {this.props.counter}  
        <div>
          <br/>
          Event in App.jsx <br/>
          <input type="number" onChange={this.valueChange.bind(this)} /> <br />  
          <button onClick={this.handelClick.bind(this)}>Increment User Input </button><br/> 
          <button onClick={this.props.increment}>Increment</button><br/>
          <button onClick={this.props.decrement}>Decrement value with 4</button><br/>
          <button onClick={this.props.incrementAgain}>Increment value with 3</button><br/>
        </div>      
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);