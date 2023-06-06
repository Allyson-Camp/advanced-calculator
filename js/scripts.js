//business logic

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

//user interface logic
function handleCalculation(e) {
    e.preventDefault();
    //form values will go here
    const number1 = parseInt(document.querySelector("input#input1").value);
    const number2 = parseInt(document.querySelector("input#input2").value);
    const operator = document.querySelector("input[name='operator']:checked").value;

    //branching to call appropriate function based on selected radio button
    let result;
    if (operator === "add") {
        result = add(number1, number2);
    } else if (operator === "subtract") {
        result = subtract(number1, number2);
    } else if (operator === "multiply") {
        result = multiply(number1, number2);
    } else if (operator === "divide") {
        result = multiply(number1, number2);
    }

    document.getElementById("output").innerText = result;
}

window.addEventListener("load", function () {
    const form = document.getElementById("calculator");
    form.addEventListener("submit", handleCalculation);
})