
//STRING OPERATORS

// concatenation +.
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice

//Compound Assignment Operators
let sentence = "Happy New ";
sentence += "Year ";
sentence += "3400! Welcome Year "; // it continued to get added
console.log(sentence);



// COMPARISON OPERATORS

console.log();
console.log(10 === "10"); //false
console.log(10 == "10"); // true

console.log(10 === 10); // true
console.log(10 == 10); // true

console.log(10 !== "10"); //true, the === turns to == when using !(not)
console.log(10 != "10"); // false, the == turns to = when using !(not)

console.log(10 !== 10); // false
console.log(10 != 10); // false


console.log(1 < 2); // -> true
console.log(3 > 2); // -> true
console.log("ABS" > "abd"); // -> false
console.log("SDF" < "abc"); // -> true

// Note: the symbol => exists in JavaScript, but is not an operator – we use it in the construction of arrow functions.