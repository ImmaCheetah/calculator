let num1 = '';
let num2 = '';
let operatorDisplay = '';

function add(...nums) {
    const totalAdd = nums.reduce((total, num) => {
        return total + num 
    }, 0)
    return toE(roundToFour(totalAdd));
}
function subtract(...nums) {
    const totalSub = nums.reduce((total, num) => {
        return total - num 
    })
    return toE(roundToFour(totalSub));
}
function divide(...nums) {
    const totalDiv = nums.reduce((total, num) => {
        return total / num 
    })
    return toE(roundToFour(totalDiv));
}
function multiply(...nums) {
    const totalMult = nums.reduce((total, num) => {
        return total * num 
    })
    return toE(roundToFour(totalMult));
}

function operate(num1, operatorDisplay, num2) {
    if (operatorDisplay === '+') {
        return add(parseFloat(num1),parseFloat(num2));
    } else if (operatorDisplay === '-') {
        return subtract(parseFloat(num1),parseFloat(num2));
    } else if (operatorDisplay === '/') {
        if (num2 === '0') {
            return "don't (ง'̀-'́)ง";
        } else {
            return divide(parseFloat(num1),parseFloat(num2));
        }   
    } else if (operatorDisplay === '*') {
        return multiply(parseFloat(num1),parseFloat(num2));
    } else {
        return 'Error';
    }
}

function roundToFour(num) {
    // return +(Math.round(num + "e+4")  + "e-4");
    
    return parseFloat(num.toFixed(3));
    
}

function toE(num) {
    if (num > 10000) return parseFloat(num).toExponential();
    return num;
}

const numbers = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');
const decimal = document.getElementById('btn-decimal');
let display = document.querySelector('#result');
let displayValue = '';
let currentValue = false;

function updateDisplay() {
    displayValue = num1 + operatorDisplay + num2;
    display.textContent = displayValue;
}

function clearDisplay() {
    display.innerHTML = '';
    num1 = '';
    num2 = '';
    operatorDisplay = '';
    decimal.disabled = false;
}


// Add event listener to all number buttons to show content
numbers.forEach(number => {
    number.addEventListener('click', function() {
        if (currentValue) { 
            clearDisplay();
            currentValue = false;
        }
        if (number.textContent === '.')
            decimal.disabled = true;
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
        decimal.disabled = false;
        if (operator.textContent === '=') {
            currentValue = true;
            if (operatorDisplay === '' && num1 === '' && num2 === '') {
                clearDisplay();
            } else if (operatorDisplay !== '' && num1 === '' && num2 === '') {
                clearDisplay();
            } else if (operatorDisplay === '' && num1 !== '' && num2 === '') {
                return;
            } else {
                num1 = operate(num1, operatorDisplay, num2).toString();
                operatorDisplay = '';
                num2 = '';
                updateDisplay(); 
            }
        } else if (operator.textContent === 'Clear') {
            clearDisplay();
        } else if (operator.textContent === 'Delete') {
            console.log(num1, num2);
            if (operatorDisplay === '') {
                num1 = num1.toString().substring(0, num1.length - 1);
            } else if (operatorDisplay.length !== '') {
                if (num2 !== '') {
                    num2 = num2.toString().substring(0, num2.length - 1);
                } else {
                    operatorDisplay = operatorDisplay.toString().substring(0, operatorDisplay.length -1);
                }
            } else {
                return 'Operator Error';
            }
            updateDisplay();
        } else {
            if (operatorDisplay !== '') {
                // num2 += operator.textContent; // AND THIS 
                // updateDisplay();
            } if (num1 !== '' && num2 !== '') {
                num1 = operate(num1, operatorDisplay, num2);
                num2 = '';
                operatorDisplay = operator.textContent;
                console.log(num1, num2);
                updateDisplay();
            } else if (num1 !== '' && operatorDisplay !== '') {
                operatorDisplay = operator.textContent;
                updateDisplay();
            } else {
                operatorDisplay += operator.textContent;
                updateDisplay();
                currentValue = false;
            }         
        }
    }) 
});
