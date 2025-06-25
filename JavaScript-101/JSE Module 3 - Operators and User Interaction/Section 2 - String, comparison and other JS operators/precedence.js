// PRECEDENCE

let result = 2 + 3 * 4;
console.log(result); // result is 14 not 20

/*Because:

* happens before +

That’s operator precedence
 */

// Use () to control precedence yourself!

let result1 = (2 + 3) * 4;
console.log(result1); // 20
