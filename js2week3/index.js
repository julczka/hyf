const buttonContainerElement = document.querySelector('#button-container');
const inputA = document.querySelector('#number-a');
const inputB = document.querySelector('#number-b')
const resultContainer = document.querySelector('#result-container')

const operations = {
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "**": (a, b) => a ** b
}

let result = 0;

function createOperationButton(operationName) {
    const button = document.createElement('button');
    button.id = operationName;
    button.textContent = operationName;
    button.addEventListener('click', () => {
        result = calculate(parseInt(inputA.value), parseInt(inputB.value), operations[operationName])
        printResult();
    })
    buttonContainerElement.append(button);
}

function printResult() {
    resultContainer.textContent = result;
}
function calculate(x, y, callback) {
    return callback(x, y)
}

console.log(Object.keys(operations))
//[multiply, divide, sum, subtract]
Object.keys(operations).forEach(createOperationButton)
printResult();




