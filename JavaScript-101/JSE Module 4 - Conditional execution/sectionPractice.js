/*Exercise 1: Write a script that will ask the user to input a number.

Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement. */


let userGuess = prompt("guess the number on my variable");

if (userGuess > 90 && userGuess < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}

// Exercise 2: Rewrite the code from the previous task, replacing if with a ternary conditional operator.
// alert("next answer is coming from the same problem in ternary during resolution");

let num = (userGuess > 90 && userGuess < 110) ? alert("BINGO!") : alert("MISS");

/*Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred.

Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true. */

alert("Enter you number in this calculator: ");
let num1 = prompt("enter your first divident: ",0);
let operator = prompt("enter your operator: [+, -, *, /]");
let num2 = prompt("enter your second divident: ", 0);

num1 = Number(num1);
num2 = Number(num2);

let addition = num1 + num2;
let multiplication = num1 * num2;
let subtraction = num1 - num2;
let division = num1 / num2;

 if (operator == "+") {
    alert(addition);
} else if (operator == "-") {
    alert(subtraction);
} else if (operator == "*") {
    alert(multiplication);
} else if (operator == "/") {
    alert(division);
} else {
    alert("invalid");
}
