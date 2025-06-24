
// LOGICAL OPERATORS:  &&:AND, ||:OR, !:NOT

console.log("AND");

// && - AND
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false, since neither is true the whole thing is false.

console.log();
console.log("OR");

// || - OR 
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false, since neither is true the whole thing is false.

console.log();
console.log("OR");

// ! - NOT
console.log(!true); // -> false
console.log(!false); // -> true

const a = false;
const b = true;
const c = false;
const d = true;

console.log();
console.log("overall example: ");

// !, ||, && 
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false

/*ACTUAL LOGIC: 

a && b = false && true = false
false && c = false && false = false
false || d = false || true = ✅ true

(c || d) = false || true = true
a && b = false && true = false
false && true = ✅ false

*/