let operator;
let firstNumber;
let secondNumber;

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
