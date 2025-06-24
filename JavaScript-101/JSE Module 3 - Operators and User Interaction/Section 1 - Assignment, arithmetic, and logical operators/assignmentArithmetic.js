
//ASSIGNMENT (=)

let year = 2050;
let nextYear = year = 2051; // -> this means that we declare a next year and we also changed the value of the year inside the next year initialization/declaration

console.log(`this year: ${year}`); // 2051
console.log(`next year: ${nextYear}`); // 2051
console.log("");

//ARITHMETHIC (+, -, *, /, %, **)

const x = 2;
const y = 6;

console.log("addition:", 2 + 6);
console.log("minus:", 2 - 6);
console.log("division:", 2 / 6);
console.log("multiplication:", 2 * 6);
console.log("division remainder:", 2 % 6);
console.log("exponent:", 2 ** 6);

//UNARY ARITHMETIC OPERATORS

let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd"; 

console.log(`${str} : ${typeof str}`); //123
console.log(`${n1} : ${typeof n1}`); //123
console.log(`${n2} : ${typeof n2}`); //-123
console.log(`${n3} : ${typeof n3}`); //123
console.log(`${n4} : ${typeof n4}`); //NaN



