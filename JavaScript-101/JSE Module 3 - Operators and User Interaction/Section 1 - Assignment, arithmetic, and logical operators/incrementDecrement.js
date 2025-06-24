
// UNARY INCREMENT AND DECREMENT OPERATORS

let n = 5;

console.log(n++); // -> 6
console.log(n); // -> 7 

let z = 3;

console.log(++z); // -> 4
console.log(z++); // -> 4 returns the original value
console.log(z); // -> 5 // then returns the value coming from n++, which affects only after one declaration

//the line of code was interpreted like this 

{
    // ++n
    n = n + 1;

    //n++
    let temp = z;
    z = z + 1;
    return temp;
};









