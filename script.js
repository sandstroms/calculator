const stack = [];
var clearField = false;

function clickOne() {
  if(clearField) {
    setValue('1');
    clearField = false;
  } else {
    appendValue('1');
  }
}

function clickTwo() {
  if(clearField) {
    setValue('2');
    clearField = false;
  } else {
    appendValue('2');
  }
}

function clickThree() {
  if(clearField) {
    setValue('3');
    clearField = false;
  } else {
    appendValue('3');
  }
}

function clickFour() {
  if(clearField) {
    setValue('4');
    clearField = false;
  } else {
    appendValue('4');
  }
}

function clickFive() {
  if(clearField) {
    setValue('5');
    clearField = false;
  } else {
    appendValue('5');
  }
}

function clickSix() {
  if(clearField) {
    setValue('6');
    clearField = false;
  } else {
    appendValue('6');
  }
}

function clickSeven() {
  if(clearField) {
    setValue('7');
    clearField = false;
  } else {
    appendValue('7');
  }
}

function clickEight() {
  if(clearField) {
    setValue('8');
    clearField = false;
  } else {
    appendValue('8');
  }
}

function clickNine() {
  if(clearField) {
    setValue('9');
    clearField = false;
  } else {
    appendValue('9');
  }
}

function clickZero() {
  if(clearField) {
    setValue('0');
    clearField = false;
  } else {
    appendValue('0');
  }
}

function add() {
  let inputVal = getValue();
  addToStack(inputVal);
  addToStack('+');
  clearField = true;
}

function subtract() {
  let inputVal = getValue()
  addToStack(inputVal);
  addToStack('-');
  clearField = true;
}

function multiply() {
  let inputVal = getValue();
  addToStack(inputVal);
  addToStack('*');
  clearField = true;
}

function divide() {
  let inputVal = getValue();
  addToStack(inputVal);
  addToStack('/');
  clearField = true;
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
  return inputVal;
}

function addToStack(item) {
  stack.push(item);
}
