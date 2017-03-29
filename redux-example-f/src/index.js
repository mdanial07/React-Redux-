import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import store from './store'
import { Provider } from 'react-redux'

function handleIncrement(){
  store.dispatch({ type: 'Increment_with_value', val:2 })
}

ReactDOM.render(

  <Provider store={store}>
  <div>
    <App/>
    <div>
      <br/>
      Events from Index.jxs <br/>
      <button onClick={()=>store.dispatch({ type: 'Increment_with_value',val:5  })}>Increment value with 5</button><br/>
      <button onClick={()=>store.dispatch({ type: 'Decrement' })}>Decrement</button><br/>
      <button onClick={handleIncrement}>Increment with Handler with value 2</button><br/>
    </div>
  </div>
  </Provider>
  ,
  document.getElementById('root')
);