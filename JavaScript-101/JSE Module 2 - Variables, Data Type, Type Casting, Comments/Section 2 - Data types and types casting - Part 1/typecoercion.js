const str = String();
const num = Number();
const bool = Boolean();

console.log(str); // -> 
console.log(num); // -> 0
console.log(bool); // -> false

const bigI = BigInt(42);
console.log(bigI);

const bigI0 = BigInt(); // -> Uncaught TypeError: Cannot convert undefined to a BigInt

/*Most of these functions can be called without any arguments. In such a situation:

the function String will by default create and return an empty string – primitive "";
the function Number will by default create and return the value 0;
the function Boolean will by default create and return the value of false. */