const stack = [];

function clickOne() {
  appendValue('1');
}

function clickTwo() {
  appendValue('2');
}

function add() {
  let inputVal = getValue();
  if(inputVal == '') {
    setValue("Error");
  } else {
    addToStack(inputVal);
    addToStack('+');
  }
}

function subtract() {
  let inputVal = getValue();
  if(inputVal == '') {
    setValue("Error");
  } else {
    addToStack(inputVal);
    addToStack('-');
  }
}

function multiply() {
  let inputVal = getValue();
  if(inputVal == '') {
    setValue("Error");
  } else {
    addToStack(inputVal);
    addToStack('*');
  }
}

function divide() {
  let inputVal = getValue();
  if(inputVal == '') {
    setValue("Error");
  } else {
    addToStack(inputVal);
    addToStack('/');
  }
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
        setValue(num2 + num1);
        break;
      case '-':
        setValue(num2 - num1);
        break;
      case '*':
        setValue(num2 * num1);
        break;
      case '/':
        setValue(num2 / num1);
        break;
    }
  }
}

function setValue(val) {
  document.getElementById('inputNumber').value = val;
}

function appendValue(val) {
  let currVal = getValue();
  document.getElementById('inputNumber').value = currVal + val;
}

function getValue() {
  let inputVal = document.getElementById('inputNumber').value;
  if(isNaN(inputVal)) {
    return '';
  } else {
    return inputVal;
  }
}

function addToStack(item) {
  stack.push(item);
}
