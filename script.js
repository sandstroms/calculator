const stack = [];

function add() {
  let inputVal = getValue();
  addToStack(inputVal);
  addToStack('+');
}

function equals() {
  let inputVal = getValue();
  addToStack(inputVal);
  if(stack.length >= 3) {
    let num1 = Number(stack.pop());
    let operator = stack.pop();
    let num2 = Number(stack.pop());
    switch(operator) {
      case '+':
        setValue(num1 + num2);
        break;
    }

  }
}

function setValue(val) {
  document.getElementById('inputNumber').value = val;
}

function getValue() {
  let inputVal = document.getElementById('inputNumber').value;
  if(!Number.isNaN(inputVal)) {
    return inputVal;
  }
}

function addToStack(item) {
  stack.push(item);
}
