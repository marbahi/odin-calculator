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