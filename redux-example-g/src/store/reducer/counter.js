
import * as firebase from "firebase";

function counter(value = 0, action) {
    switch (action.type) {
        case 'Increment':
            return value + 1
        case 'Decrement':
            return value - 1
        default:
            return value
        case 'Increment_with_value':
            return value + action.val
                
        case 'Decrement_with_value':
            return value - action.val;
    }
}

export default counter;