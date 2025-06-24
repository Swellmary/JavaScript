
// LOGICAL OPERATORS AND NON-BOOLEAN VALUES

let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";

// ! - reverse the correct anwer
console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true
// ! logical operator always returns true or false value
// while AND and OR does not always

// !! - reverse the not
console.log(!!nr); // -> false, 0 is always false
console.log(!!name); // -> true

console.log();
// && returns the first falsy value or the last one if the value is truthy
console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
 
 
// || OR returns the first truthy, if not it looks on the other one if it's truthy or returns the last if all are falsy
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice"
console.log("" || "Bob"); // -> Bob

/*Both operators also use short-circuit evaluation.

So, if the first operand of AND is false, it will be returned, and no other check will be performed.

Conversely, if the first operand of OR is true, it will be returned, and no other check will be made. This quickens code execution, but has one side effect visible in this example: */
console.log();

let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0, bisag mura ra siyag formula it still works with the output of it 
console.log(x); // -> 1
console.log(y); // -> y == 0
