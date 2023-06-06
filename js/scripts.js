function saySomething(whatToSay) {
    window.alert(whatToSay);
}

function add(number1, number2) {
    return number1 + number2;
}

saySomething("hi");

// let result =add(5, 7);
// let outputText = "The sum is " + result + "!!";

// saySomething(outputText);

//much shorter way of writing it
saySomething("The sum is " + add(3, 5) + ".");
