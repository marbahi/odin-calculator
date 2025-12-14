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

let firstNumber = null;
let lastNumber = null;
let resultNumber = null;
let operator = null
let clickedValues = [];
let number;

function operate(fNumber, lNumber, operator) {
    if(operator === "+") {
        return adding(fNumber, lNumber);
    } else if(operator === "-") {
        return subtract(fNumber, lNumber);
    } else if(operator === "*") {
        return multiply(fNumber, lNumber);
    } else if(operator === "/") {
        return divide(fNumber, lNumber);
    }
}

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(this.value === "clear") {
            clickedValues = [];
            firstNumber = null;
            lastNumber = null;
            resultNumber = null;
            document.querySelector(".display.small").innerHTML = "";
            document.querySelector(".display.big").innerHTML = "";
        } else if(this.value === "erase") {
            clickedValues.pop();
            number = 0;
            number = clickedValues.join("");
            document.querySelector(".display.big").innerHTML = number;
        } else if(this.value === "+") {
            operator = this.value;
            if(firstNumber === null) {
                firstNumber = parseInt(clickedValues.join(""));
                console.log("First Number:", firstNumber);
                clickedValues = [];
                document.querySelector(".display.small").innerHTML = `${firstNumber} +`;
                document.querySelector(".display.big").innerHTML = "";
            } else if(lastNumber === null) {
                lastNumber = parseInt(clickedValues.join(""));
                console.log("Second Number:", lastNumber);
                clickedValues = [];
                resultNumber = operate(firstNumber, lastNumber, "+");
                console.log("Result: ", resultNumber);
                document.querySelector(".display.small").innerHTML = `${firstNumber} + ${lastNumber}`;
                document.querySelector(".display.big").innerHTML = resultNumber;
                firstNumber = resultNumber;
                resultNumber = null;
                lastNumber = null;
            } else if(lastNumber !== null) {
                document.querySelector(".display.small").innerHTML = `${firstNumber} +`
                lastNumber = null;
            }
        } else if(this.value === "=") {
            if(firstNumber === null) {
                document.querySelector(".display.small").innerHTML = `Input the number & operator`;
                document.querySelector(".display.big").innerHTML = 'Error';
                clickedValues = [];
                firstNumber = null;
                lastNumber = null;
                resultNumber = null;
            } else if(operator === null) {
                document.querySelector(".display.small").innerHTML = `Input the operator firs!!t`;
                document.querySelector(".display.big").innerHTML = 'Error';
                clickedValues = [];
                firstNumber = null;
                lastNumber = null;
                resultNumber = null;
            } else if(clickedValues.length === 0) {
                document.querySelector(".display.small").innerHTML = `Input the number first!!`;
                document.querySelector(".display.big").innerHTML = 'Error';
                clickedValues = [];
                firstNumber = null;
                lastNumber = null;
                resultNumber = null;
            }else {
                lastNumber = parseInt(clickedValues.join(""));
                console.log("Second Number:", lastNumber);
                clickedValues = [];
                document.querySelector(".display.small").innerHTML = `${firstNumber} ${operator} ${lastNumber}`;
                resultNumber = operate(firstNumber, lastNumber, operator);
                console.log("Result: ", resultNumber);
                document.querySelector(".display.big").innerHTML = resultNumber;
                firstNumber = resultNumber;
                resultNumber = null;
                operator = null;
            }
        } else {
            if(operator === null && firstNumber !== null) {
                document.querySelector(".display.small").innerHTML = `Input the operator first!!`;
                document.querySelector(".display.big").innerHTML = 'Error';
                clickedValues = [];
                firstNumber = null;
                lastNumber = null;
                resultNumber = null;
            }
            if(firstNumber !== null) {
                console.log("First Number:", firstNumber);
                document.querySelector(".display.small").innerHTML = `${firstNumber} ${operator}`;
            }
            clickedValues.push(this.value); // 'this' refers to the clicked button
            console.log("Current clicked values:", clickedValues);
            number = 0;
            number = clickedValues.join("");
            document.querySelector(".display.big").innerHTML = number;
        }
    });
});