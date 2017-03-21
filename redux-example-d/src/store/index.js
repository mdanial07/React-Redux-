import { createStore } from 'redux'
import counter from './counter'

let store = createStore (counter)

store.subscribe(()=>
    console.log(store.getState())
)

export default store;