import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store'


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
