const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

let num1;
let num2;
let operator;

const operate = (num1, num2, operator) => {
    return operator === "+" ? add(num1, num2)
        : operator === "-" ? subtract(num1, num2)
        : operator === "*" ? multiply(num1, num2)
        : divide(num1, num2);
}

const displayTextArea = document.querySelector(".display-text-area");
let displayValue;

const populateDisplay = (num) => {
    displayValue ? displayValue += num : displayValue = num;
    displayTextArea.textContent = displayValue;
}

const numberButtons = document.querySelectorAll("button")
numberButtons.forEach(button => button.addEventListener("click", () => populateDisplay(button.textContent)))