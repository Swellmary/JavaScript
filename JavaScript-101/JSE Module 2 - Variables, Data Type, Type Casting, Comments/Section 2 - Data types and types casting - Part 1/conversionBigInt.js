



console.log(BigInt(11)); // -> 11n
console.log(BigInt(0x11)); // -> 17n
console.log(BigInt(11e2)); // -> 1100n

console.log(BigInt(true)); // -> 1n

console.log(BigInt("11")); // -> 11n
console.log(BigInt("0x11")); // -> 17n

console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt
console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert null to a BigInt
console.log(BigInt(NaN)); // -> Uncaught TypeError: Cannot convert null to a BigInt