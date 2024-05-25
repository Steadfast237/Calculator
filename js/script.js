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

const display = document.querySelector('.display');
const container = document.querySelector('.container');

const evaluate = (e) => {
  const target = e.target.tagName === 'BODY' ? e._target : e.target;
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

  if (type === 'enter') {
    if (operator) {
      displayValue = String(operate(operator, firstNumber, secondNumber));
      display.textContent = displayValue;

      if (isNaN(displayValue)) displayValue = '';

      resetState();
    }
  }

  if (type === 'escape') {
    resetState();

    displayValue = '';
    display.textContent = displayValue;
  }

  if (type === 'backspace') {
    const arr = displayValue.split('');
    arr.splice(-1, 1);
    displayValue = arr.join('');
    display.textContent = displayValue;
  }
};

const keyboardsupport = (e) => {
  const digits = '0123456789.';
  const operators = '+*/-';
  const otherKeys = ['enter', 'backspace', 'escape'];
  const key = e.key;
  const code = e.code;

  if (digits.includes(key)) {
    e._target = {
      textContent: key,
      dataset: {
        type: 'number',
      },
    };
    evaluate(e);
  }

  if (operators.includes(key)) {
    e._target = {
      dataset: {
        type: 'operator',
        function: code.toLowerCase().split('numpad')[1],
      },
    };
    evaluate(e);
  }

  if (otherKeys.includes(key.toLowerCase())) {
    e._target = {
      dataset: {
        type: key.toLowerCase(),
      },
    };
    evaluate(e);
  }
};

const Load = () => {
  container.addEventListener('click', evaluate);
  document.addEventListener('keydown', keyboardsupport);
};

Load();
