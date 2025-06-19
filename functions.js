function testFunction() {
    console.log("Hi!?");
    console.log("Hey!?");
}

testFunction();

let globalGreetings = "Good";

function test2Function() {
    var localGreetings = "Morning";
    console.log("function:");
    console.log(globalGreetings);
    console.log(localGreetings);
}

test2Function();

console.log("main program:");
console.log(globalGreetings);
console.log(localGreetings); // -> Uncaught ReferenceError: localGreeting is not defined

// Let's take a closer look at the code. In the example, we declared the global variable globalGreeting. Then we defined the testFunction function, inside which we declared the local variable localGreeting. Then we called the testFunction function, which resulted in writing out the values of both variables (inside the function, we have access to both the global variable and the local ones). Attempting to access the local variable localGreeting outside the function will fail. So we’ve finally succeeded in demonstrating that variable declarations using the word var can also be local.


