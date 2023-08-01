let num1 = '';
let num2 = '';
let operatorDisplay = '';

function add(...nums) {
    const totalAdd = nums.reduce((total, num) => {
        return total + num 
    }, 0)
    return roundToFour(totalAdd);
}
function subtract(...nums) {
    const totalSub = nums.reduce((total, num) => {
        return total - num 
    })
    return roundToFour(totalSub);
}
function divide(...nums) {
    const totalDiv = nums.reduce((total, num) => {
        return total / num 
    })
    return roundToFour(totalDiv);
}
function multiply(...nums) {
    const totalMult = nums.reduce((total, num) => {
        return total * num 
    })
    return roundToFour(totalMult);  
}

function operate(num1, operatorDisplay, num2) {
    if (operatorDisplay === '+') {
        return add(parseInt(num1),parseInt(num2));
    } else if (operatorDisplay === '-') {
        return subtract(num1, num2);
    } else if (operatorDisplay === '/') {
        if (num2 === '0') {
            return 'Bro stop';
        } else {
            return divide(num1, num2);
        }   
    } else if (operatorDisplay === '*') {
        return multiply(num1, num2);
    } else {
        return 'Wha happen';
    }
}

function roundToFour(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}

// function toE(num) {
//     if (num > 10000000) return num.toExponential();
// }

const numbers = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');
let display = document.querySelector('#result');
let displayValue = '';


function updateDisplay() {
    displayValue = num1 + operatorDisplay + num2;
    display.textContent = displayValue;
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
            num1 = operate(num1, operatorDisplay, num2);
            operatorDisplay = '';
            num2 = '';
            updateDisplay(); 
        } else if (operator.textContent === 'Clear') {
            display.innerHTML = '';
            num1 = '';
            num2 = '';
            operatorDisplay = '';
        } else if (operator.textContent === 'Delete') {
            if (operatorDisplay == '') {
                num1 = num1.substring(0, num1.length - 1);
            } else if (operatorDisplay.length > 0) {
                operatorDisplay = operatorDisplay.substring(0, operatorDisplay.length -1);
            } else {
                if (num2.length <= 0) { 
                    operatorDisplay = '';
                } else { 
                    num2 = num2.substring(0, num2.length - 1); 
                }
            }
            updateDisplay();
        } else {
            operatorDisplay += operator.textContent;
            updateDisplay();
        }
    }) 
});
