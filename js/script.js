let operator = '';
let firstNumber = 0;
let secondNumber = 0;

const add = (a, b) => a + b;

const divide = (a, b) => a / b;

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

// DOM
let displayValue = '';

const container = document.querySelector('.container');
const display = document.querySelector('.display');

container.addEventListener('click', function (e) {
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
    if (firstNumber && operator && secondNumber) {
      displayValue = String(operate(operator, firstNumber, secondNumber));
      display.textContent = displayValue;

      firstNumber = Number(displayValue);
      operator = target.dataset.function;
      displayValue = '';
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

      operator = '';
      firstNumber = 0;
      secondNumber = 0;
    }
  }

  console.log(firstNumber, secondNumber, operator);
});
