const num = 42;

const strFromNum1 = String(num + 2);
const strFromNum2 = String(20);
const strFromBool = Boolean(true);
const strFromStr = Number("291");
const strFromNumber = Boolean(0);

console.log(strFromNum1);
console.log(strFromNum2);
console.log(strFromBool);
console.log(strFromStr);
console.log(strFromNumber);


console.log("_________________________________");
console.log("CONVERSION STRING");


let str = String(1n);
let nowStr = "now this is great!";
console.log(str);
console.log(typeof nowStr);
