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
        return add(parseInt(num1),parseInt(num2));
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

const numbers = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');

let display = document.querySelector('#result');
const division = document.getElementById('divide');
// let displayOperator = '';
// let displayNumber = '';


function updateDisplay() {
    let displayValue = num1 + operatorDisplay + num2;
    // let displayResult = operate();
    display.textContent = displayValue;
    // display.textContent = displayResult;
    
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
    operator.addEventListener('click', () => {
        if (operator.textContent === '=') {
            console.log(operate(num1, operatorDisplay, num2));  
            updateDisplay(); 
        } else if (operator.textContent === 'Clear') {
            display.innerHTML = '';
            num1 = '';
            num2 = '';
            operatorDisplay = '';
        } else if (operator.textContent === 'Delete') {
            display.textContent = display.textContent.substring(0, display.textContent.length - 1);
            updateDisplay();
            console.log(display.textContent);
        } else {
            operatorDisplay += operator.textContent;
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
