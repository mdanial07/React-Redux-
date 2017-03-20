import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function counter(value = 0, action) {
  switch (action.type) {
    case 'Increment':
      return value + 1
    case 'Decrement':
      return value - 1
  }

}

let store = createStore(counter)
store.subscribe(() =>
  console.log(store.getState)
)

store.dispatch({ type: 'Increment' })
store.dispatch({ type: 'Increment' })
store.dispatch({ type: 'Increment' })
store.dispatch({ type: 'Decrement' })

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
