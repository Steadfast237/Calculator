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
      add(firstNumber, secondNumber);
      break;

    case 'divide':
      divide(firstNumber, secondNumber);
      break;

    case 'subtract':
      subtract(firstNumber, secondNumber);
      break;

    case 'multiply':
      multiply(firstNumber, secondNumber);
      break;
  }
};

// DOM
const container = document.querySelector('.container');
const display = document.querySelector('.display');

let displayValue = '';

container.addEventListener('click', function (e) {
  const target = e.target;
  const type = target.dataset.type;

  if (type === 'number') {
    displayValue += target.textContent;
    display.textContent = displayValue;
  }
});
