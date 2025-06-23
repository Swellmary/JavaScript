
console.log("BOOLEAN");

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false); //-> false
console.log(typeof false); //-> boolean
console.log(isDataValid); //-> true
console.log(typeof isDataValid); //-> boolean

console.log("___________________________")

console.log("NUMBER");

const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;
   
console.log(year); // -> 1991;
console.log(typeof year); // -> number;

let a = 1 / 0;
let b = -Infinity;

console.log(a); // -> Infinity
console.log(b); // -> -Infinity
console.log(typeof a); // -> Nan
console.log(typeof b); // -> Number


console.log("___________________________")

console.log("BIGINT/BigInt");

// let  big3  =  1000n  +  20;  
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions
// Division by zero is also an, Uncaught TypeError:

let big = 12324230472304023n;
let big2 = 1n;

console.log(big);
console.log(typeof big);

console.log(big2); // -> 1n
console.log(7n / 4n); // -> 1n


console.log("___________________________")
console.log("STRING");

let country = "Malawi";
let continent = "Africa";

let statement = `${country} is located in ${continent}`; 

console.log(statement);

//${ } is used inside strings to insert values or run small expressions. 

//${ } is used to embed JavaScript expressions inside a string.
//*You use backticks (`) instead of quotes.
//*Inside the backticks, anything you wrap in ${ } will be evaluated and inserted into the string. */

console.log("console is an object, and log is a method inside that object");

//The console object has many other methods besides the log method, such as time and timeEnd (which can be used to measure time).

console.time();
console.log("test console");
console.timeEnd(); // -> default: 0.108154296875 ms
console.error();
console.warn();

let str = "java script language";

console.log(str.charAt(15));
console.log(str.slice(0, 4));
console.log(str.length);
console.log()

//dot can appear after literals too

let river = "Mekong";
let character = river.charAt(2);

console.log(character);

console.log(str.split(""));
console.log(str.split(" "));

console.log("hey yow" .length);


console.log("___________________________")
console.log("STRING");

 

