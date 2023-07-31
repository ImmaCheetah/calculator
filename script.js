let num1 = '';
let num2 = '';
let operatorDisplay = '';

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

const numbers = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');

let display = document.querySelector('#result');
const division = document.getElementById('divide');
let displayOperator = '';
let displayNumber = '';


function updateDisplay() {
    let displayValue = num1 + operatorDisplay + num2;
    display.textContent = displayValue;
    console.log(displayValue);
}


// Add event listener to all number buttons to show content
numbers.forEach(number => {
    number.addEventListener('click', function() {
        num1 += number.textContent;
        updateDisplay();
        if (display.textContent.includes(num1, '/*-+')) {
            num2 += number.textContent;
        }
    }) 
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        operatorDisplay += operator.textContent;
        console.log(operatorDisplay);
        updateDisplay();


        // if (e.target.innerText === '/') {
        //     display.textContent += operator.textContent;
        //     displayOperator === '/';
        //     firstNum = displayNumber;
        //     console.log(displayNumber);
        // }
    }) 
});
