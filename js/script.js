let operator = '';
let firstNumber = 0;
let secondNumber = 0;
let displayValue = '';

const add = (a, b) => a + b;

const divide = (a, b) => {
  if (b === 0) return "Can't divide by zero.";

  return a / b;
};

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const operate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case 'add':
      return add(firstNumber, secondNumber);

    case 'divide':
      return divide(firstNumber, secondNumber);

    case 'subtract':
      return subtract(firstNumber, secondNumber);

    case 'multiply':
      return multiply(firstNumber, secondNumber);
  }
};

const resetState = () => {
  operator = '';
  firstNumber = 0;
  secondNumber = 0;
};

// DOM
const display = document.querySelector('.display');
const container = document.querySelector('.container');

const evaluate = (e) => {
  const target = e.target;
  const type = target.dataset.type;

  if (type === 'number') {
    if (firstNumber) {
      displayValue += target.textContent;
      display.textContent = displayValue;
      secondNumber = Number(displayValue);
    } else {
      displayValue += target.textContent;
      display.textContent = displayValue;
    }
  }

  if (type === 'operator') {
    if (
      (firstNumber || firstNumber === 0) &&
      operator &&
      (secondNumber || secondNumber === 0)
    ) {
      displayValue = String(operate(operator, firstNumber, secondNumber));
      display.textContent = displayValue;

      if (isNaN(displayValue)) {
        resetState();
        displayValue = '';
      } else {
        firstNumber = Number(displayValue);
        operator = target.dataset.function;
        displayValue = '';
      }
    } else if (operator) {
      operator = target.dataset.function;
    } else {
      firstNumber = Number(displayValue);
      operator = target.dataset.function;
      displayValue = '';
    }
  }

  if (type === 'equals') {
    if (operator) {
      displayValue = String(operate(operator, firstNumber, secondNumber));
      display.textContent = displayValue;

      if (isNaN(displayValue)) displayValue = '';

      resetState();
    }
  }

  if (type === 'clear') {
    resetState();

    displayValue = '';
    display.textContent = displayValue;
  }
};

const addClick = () => {
  container.addEventListener('click', evaluate);
};

addClick();
