

let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}

console.log(`price = ${price}, shipping = ${shippingCost}`); // price = 100, shipping = 0


let price1 = 100;
let shippingCost1 = price1 > 50 ? 0 : 5;

console.log("price =", price + ",", "shipping =", shippingCost1);


//----------------------------------------
let start = confirm("let's start?");

start ? alert("go!") : alert("Aborted");