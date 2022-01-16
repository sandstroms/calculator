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
    setValue('4');
    clearField = false;
  } else {
    appendValue('5');
  }
}

function clickSix() {
  appendValue('6');
}

function clickSeven() {
  appendValue('7');
}

function clickEight() {
  appendValue('8');
}

function clickNine() {
  appendValue('9');
}

function clickZero() {
  appendValue('0');
}

function add() {
  let inputVal = getValue();
  addToStack(inputVal);
  addToStack('+');
  clearField = true;
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
  return inputVal;
}

function addToStack(item) {
  stack.push(item);
}
