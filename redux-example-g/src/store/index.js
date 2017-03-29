
import { createStore } from 'redux'
import counter from './reducer/counter'

let store = createStore (counter)

store.subscribe(()=>
    console.log(store.getState())
)


export default store;