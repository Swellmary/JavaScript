
// if

let isUserReady = confirm("Are you ready?!");
console.log(isUserReady);

if (isUserReady) {
    alert("User ready!");
}


let unitPrice = 10;
let pieces = window.prompt("How many pieces do you order? ", 0);

if (pieces > 0) {
    let totalBuy = unitPrice * pieces;
    console.log(totalBuy); 
} // if executes the code even without console.log in the outside but rather executes on what in the if(){} statement

try {
    console.log(total); // -> Uncaught ReferenceError: total is not defined, because total wasn't declared on the outside/local variable.
} 
catch(error){
    console.error("if already executes inside the statement and don't have to declare it outside unlike objects or functions");
}
finally {
    console.log("yes we're still going on.");
    
}

console.log();

let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge < 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}

console.log(shippingCost) // declared console outside since the variable coming from the outside too

// or other way of putting it into conditional statement

if (userAge < 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
    console.log(shippingCost);
} // still works miracles!

