let firstNum = '';
let secondNum = '';
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

const numbers = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');
const btnsAndOprts = document.querySelectorAll('.number-btn, .operator-btn');
const result = document.querySelector('#result');
const division = document.getElementById('divide');
let displayOperator = '';
let displayNumber = '';
let clicked = false;


// btnsAndOprts.forEach(button => {
//     button.addEventListener('click', e => {
//         if (e.target.innerText === numbers.innerText) {
//             console.log('yeee');
//         }
//     })
// })

// Add event listener to all number buttons to show content
numbers.forEach(number => {
    number.addEventListener('click', function() {
    result.textContent += number.textContent;
    displayNumber = result.textContent;
    // console.log(displayNumber);
    }) 
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        if (e.target.innerText === '/') {
            result.textContent += operator.textContent;
            displayOperator === '/';
            firstNum = displayNumber;
            console.log(displayNumber);
            console.log('it work');
        }

    // result.textContent += operator.textContent;
    // displayNumber = result.textContent;
    // console.log(displayNumber);
    }) 
});






// division.addEventListener('click', doDivide);

// function doDivide() {
//     if (displayNumber !== '' && !displayNumber.includes('/')) {
//         firstNum = displayNumber;
//         console.log('this is firstnum '+firstNum);
//     } else if (displayNumber !== '' && displayNumber.includes('/')) {
//         secondNum = displayNumber;
//         console.log('this is secondnum '+secondNum);
//     } else {
//         console.log('error');
//     }
// }

