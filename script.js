let firstNum = 0;
let secondNum = 0;
let operator = '';

function add(...nums) {
    const totalAdd = nums.reduce((total, num) => {
        return total + num 
    }, 0)
    return totalAdd;
}
function subtract(...nums) {
    const totalSub = nums.reduce((total, num) => {
        return total - num 
    })
    return totalSub;
}
function divide(...nums) {
    const totalDiv = nums.reduce((total, num) => {
        return total / num 
    })
    return totalDiv;
}
function multiply(...nums) {
    const totalMult = nums.reduce((total, num) => {
        return total * num 
    })
    return totalMult;
}
function operate(operator, firstNum, secondNum) {
    if (operator === '+') {
        return add(firstNum, secondNum);
    } else if (operator === '-') {
        return subtract(firstNum, secondNum);
    } else if (operator === '/') {
        return divide(firstNum, secondNum);
    } else if (operator === '*') {
        return multiply(firstNum, secondNum);
    } else {
        return 'Wha happen';
    }
}

const buttons = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');
const result = document.querySelector('#result');
const division = document.getElementById('divide');
let displayValue = '';

// Add event listener to all number buttons to show content
buttons.forEach(button => {
    button.addEventListener('click', function() {
    result.textContent += button.textContent;
    displayValue = result.textContent;
    console.log(displayValue);
    }) 
});

operators.forEach(operator => {
    operator.addEventListener('click', function() {
    result.textContent += operator.textContent;
    displayValue = result.textContent;
    // console.log(displayValue);
    }) 
});

division.addEventListener('click', doDivide);

function doDivide() {
    if (displayValue != '' && !displayValue.includes('/')) {
        firstNum = displayValue;
        console.log('this is firstnum '+firstNum);
    } else if (displayValue != '' && displayValue.includes('/')) {
        secondNum = displayValue;
        console.log('this is secondnum '+secondNum);
    } else {
        console.log('stop');
    }
}

