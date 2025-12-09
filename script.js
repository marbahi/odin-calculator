function adding(fNum, LNum) {
    return fNum + LNum;
}

function subtract(fNum, LNum) {
    return fNum - LNum;
}

function multiply(fNum, LNum) {
    return fNum * LNum;
}

function divide(fNum, LNum) {
    return fNum / LNum;
}

let firstNumber;
let lastNumber;
let operator;
let clickedValues = [];
let number;

function operate(firstNumber, lastNumber, operator) {
    if(operator === "+") {
        adding(firstNumber, lastNumber);
    } else if(operator === "-") {
        subtract(firstNumber, lastNumber);
    } else if(operator === "*") {
        multiply(firstNumber, lastNumber);
    } else if(operator === "/") {
        divide(firstNumber, lastNumber);
    }
}

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        clickedValues.push(this.value); // 'this' refers to the clicked button
        console.log("Current clicked values:", clickedValues);
        number = 0;
        number = clickedValues.join("");
        document.querySelector(".display.small").innerHTML = number;
        document.querySelector(".display.big").innerHTML = number;
    });
});