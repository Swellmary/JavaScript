/*Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:

the price of a single rose (8) and the number of roses you have (70)
the price of a single lily (10) and the number of lilies you have (50)
the price of a single tulip (2) and the number of tulips you have (120)*/

console.log("* the price of a single rose (8) and the number of roses you have (70)");
console.log("* the price of a single lily (10) and the number of lilies you have (50)");
console.log("* the price of a single tulip (2) and the number of tulips you have (120)");
console.log();

const rosePrice = 8;
const lilyPrice = 10;
const tulipsPrice = 2;

let roseQuantity = 70;
let lilyQuantity = 50;
let tulipsQuantity = 120;

let roseValue = rosePrice * roseQuantity;
let lilyValue = lilyPrice * lilyQuantity;
let tulipsValue = tulipsPrice * tulipsQuantity;

let total = roseValue + lilyValue + tulipsValue;

console.log("Rose – Unit price" + rosePrice + ", quantity: " + roseQuantity + ", value: " + roseValue);
console.log("Lily – Unit price" + lilyPrice + ", quantity: " + lilyQuantity + ", value: " + lilyValue);
console.log("Tulips – Unit price" + tulipsPrice + ", quantity: " + tulipsQuantity + ", value: " + tulipsValue);

console.log("Total: " + total);
console.log("_____________________________________________________________________");
console.log();
console.log("----Updated Inventory----");

/*Question 2: Modify the code from the previous example.

Assume that the prices of flowers will be constant (they will not change). Declare and initialize the remaining variables in the same way as in the previous example. Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30.

Display all the collected information in the console again.

 */

let numberOfRoses = roseQuantity - 20;
let numberOfLily = lilyQuantity - 30;

let roseValueNow = numberOfRoses * rosePrice;
let lilyValueNow = numberOfLily * rosePrice;

let newTotal = roseValueNow + lilyValueNow + tulipsValue;

console.log("Rose – Unit price" + rosePrice + ", quantity: " + roseQuantity + ", value: " + roseValueNow);
console.log("Lily – Unit price" + lilyPrice + ", quantity: " + lilyQuantity + ", value: " + lilyValueNow);
console.log("Tulips – Unit price" + tulipsPrice + ", quantity: " + tulipsQuantity + ", value: " + tulipsValue);

console.log("Total of updated inventory: " + newTotal);