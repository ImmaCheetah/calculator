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
function operate(num1, operatorDisplay, num2) {
    if (operatorDisplay === '+') {
        return add(num1, num2);
    } else if (operatorDisplay === '-') {
        return subtract(num1, num2);
    } else if (operatorDisplay === '/') {
        return divide(num1, num2);
    } else if (operatorDisplay === '*') {
        return multiply(num1, num2);
    } else {
        return 'Wha happen';
    }
}

console.log(operate(8, '/', 2));

const numbers = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');

let display = document.querySelector('#result');
const division = document.getElementById('divide');
// let displayOperator = '';
// let displayNumber = '';


function updateDisplay() {
    let displayValue = num1 + operatorDisplay + num2;
    display.textContent = displayValue;
    // console.log(displayValue);
}


// Add event listener to all number buttons to show content
numbers.forEach(number => {
    number.addEventListener('click', function() {
        if (operatorDisplay == '') {
            num1 += number.textContent;
          } else {
            num2 += number.textContent;
          }
          updateDisplay();
    }) 
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        if (operator.textContent === '=') {
            operate(num1, operatorDisplay, num2);  
            updateDisplay(); 
        } else {
            operatorDisplay += operator.textContent;
            // console.log(operatorDisplay);
            updateDisplay();
        }


        // if (e.target.innerText === '/') {
        //     display.textContent += operator.textContent;
        //     displayOperator === '/';
        //     num1 = displayNumber;
        //     console.log(displayNumber);
        // }
    }) 
});
