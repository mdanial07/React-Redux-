
function counter(value = 0, action) {
  switch (action.type) {
  case 'add_todo':
    return value + 1
  
  default:
    return value
  }
}

export default counter;