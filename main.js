let currentValue = 0;
let previousValue = 0; 
let currentOperation = null; 
let isNewEntry = true; 

function liveDisplay(enteredValue) {
    if (isNewEntry) {
        display.innerText = '';
        isNewEntry = false;
    }

    if (enteredValue === 10) { 
        if (!display.innerText.includes(".")) {
            display.innerText += ".";
        }
    } else {
        if (display.innerText === "0") {
            display.innerText = ""; 
        }
        display.innerText += enteredValue;
    }
    currentValue = parseFloat(display.innerText); 
}

function setOperation(operator) {
    if (!isNewEntry && currentOperation !== null) {
        calculate();
    }
    previousValue = currentValue; 
    currentOperation = operator; 
    isNewEntry = true; 
}

function calculate() {
    if (currentOperation === null || isNewEntry) return;

    let result;
    switch (currentOperation) {
        case '+':
            result = previousValue + currentValue;
            break;
        case '-':
            result = previousValue - currentValue;
            break;
        case 'X':
            result = previousValue * currentValue;
            break;
        case '/':
            result = previousValue / currentValue;
            break;
        case '%':
            result = (previousValue * (1/100)) * currentValue;
            break;
        case '^':
            result = Math.pow(previousValue, currentValue);
            break;
    }

    currentValue = result;
    display.innerText = result;
    isNewEntry = true;
}

function clearDisplay() {
    display.innerText = '0';
    currentValue = 0;
    previousValue = 0;
    currentOperation = null;
    isNewEntry = true;
}
