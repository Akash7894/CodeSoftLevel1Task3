// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '' && firstOperand === '') return;
    if (currentInput !== '') {
        if (firstOperand === '') {
            firstOperand = currentInput;
        } else if (operator !== '') {
            calculateResult();
            firstOperand = display.innerText;
        }
        currentInput = '';
    }
    operator = op;
}

function calculateResult() {
    if (currentInput === '' || operator === '') return;
    secondOperand = currentInput;
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    display.innerText = result;
    currentInput = '';
    operator = '';
    firstOperand = result.toString();
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput === '' ? '0' : currentInput;
}
