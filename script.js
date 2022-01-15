const stack = [];

function add() {
  let inputVal = getValue();
  addToStack(inputVal);
  addToStack('+');
}

function getValue() {
  let inputVal = document.getElementById('inputNumber').value;
  if(!Number.isNaN(inputVal)) {
    return inputVal;
  } else {
    return '';
  }
}

function addToStack(item) {
  stack.push(item);
}
