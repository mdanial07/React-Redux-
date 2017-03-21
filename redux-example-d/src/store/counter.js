
function counter(value = 0, action) {
    switch (action.type) {
        case 'Increment':
            return value + 1
        case 'Decrement':
            return value - 1
        default:
            return value
    }
}

export default counter;