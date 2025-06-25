// OTHER OPERATORS


// TYPEOF
let name = "Marydale";
let age = 32;

console.log(typeof name); //string
console.log(typeof age); //number

// INSTANCEOF - The instanceof operator appeared while discussing arrays. It is a binary operator that checks whether an object (left operand) is of some type (right operand). Depending on the test result, it returns true or false.

let names = ["Patti", "Bob"];
let anotherName = names[0];
console.log(names instanceof Array); // -> true
console.log(anotherName instanceof Array); // -> false


// DELETE
delete names[0];
console.log(names);

let user = {
    pig: "pink", 
    dog: "sorted",
    cat: "orange"
};

user;

console.log(user);
delete user.pig;
console.log(user)

console.log();

// TERNARY - (condition? comparison : comparison) = result

let ternary = 1 > 2 ? "Alice" : "Bob"; // if 1 < 2 then print Alice else: Bob
console.log(ternary);

console.log(true ? "Joker" : "Birds of Prey");
console.log(false ? "Joker" : "Harley Quin");
