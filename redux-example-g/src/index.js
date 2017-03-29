import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import * as firebase from "firebase"
import { Provider } from 'react-redux'
import store from './store'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCM6Tcssg8K3PwddZEnw2D-VI4mb5Soi_c",
    authDomain: "weblearn-f0c26.firebaseapp.com",
    databaseURL: "https://weblearn-f0c26.firebaseio.com",
    storageBucket: "weblearn-f0c26.appspot.com",
    messagingSenderId: "345369767855"
  };
  firebase.initializeApp(config);

function handleIncrement() {
  store.dispatch({ type: 'Increment' })
}


ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <div>
        <br />
        Events from INdex.js<br /><br />
        <button onClick={() => store.dispatch({ type: 'Increment' })}> INcrement</button>
        <button onClick={() => store.dispatch({ type: 'Decrement' })}> Decrement</button>
        <button onClick={handleIncrement}> INcrement</button>
      </div>
    </div>
  </Provider>,
  document.getElementById('root')
);
