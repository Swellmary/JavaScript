console.log("Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.");

const bool = Boolean(1);
const num = Number("Hey Joe!");
const bigI = BigInt(true);
const str = String(29);

const undefinedObj = undefined;

console.log(bool);
console.log(num);
console.log(bigI);
console.log(str);
console.log(undefinedObj);

//example answer

let b1 = true;
let b2 = Boolean(true);

let n1 = 99;
let n2 = Number(100);

let big1 = 3n;
let big2 = BigInt(10000000000000n);

let s1 = "yep!";
let s2 = String("");

//_________________________________________
console.log("");
console.log("Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].");

console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);

console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);

console.log(`${big1} [${typeof big1}]`);
console.log(`${big2} [${typeof big2}]`);

console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);


//_________________________________________
console.log("");
console.log("Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value '1234'. Is it possible?");

let stri = "1234";
let no = String(stri);
let bigBool = Boolean(no);

console.log(`${bigBool}, ${typeof bigBool}`);
console.log("");

//_________________________________________
console.log("");
console.log("Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types");

let ab = Boolean(2 + true);
let cd = Number(2 + 3);
let ef = String("1" + "1");
let gf = BigInt(1n + 2n);

console.log(`${ab}`);
console.log(`${cd}`);
console.log(`${ef}`);
console.log(`${gf}`);


console.log("--------------------")
//answer of example

let hi = 4 + 3;
let jk = 2 + 2;
let lm = "He" + "llo";
let np = 5n + 9n; 
let und = undefined;

console.log(Boolean(hi), typeof hi); // -> true number
console.log(Number(jk), typeof jk); // -> 4 number
console.log(String(lm), typeof lm); // -> Hello string
console.log(BigInt(np), typeof np); // -> 14n bigint
console.log(typeof und, und); // -> undefined undefined

//_________________________________________
console.log("")
console.log("Question 5: Try adding two values of different types and check the results.");

let strNum = "hello" + 2;
console.log(strNum);

let boolStr = true + " hey Joe!";
console.log(boolStr, typeof boolStr);

//_________________________________________
console.log("")
console.log("Question 6: Try to modify the line const str1 = 42 + '1'; to get the result 43 (without removing the quotes around 1).");

const str1 = 42 + +"1"; 
console.log(str1);