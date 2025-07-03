
/*
let n = 0;
console.log(n);
n += 10;
console.log(n); // 10 
n += 10;
console.log(n); // 20
n += 10;
console.log(n); // 30
n += 10;
console.log(n); // 40
n += 10;
console.log(n); // 50
*/


let n = 0;
while (n < 91) {
    console.log(n);
    n += 10; // incrementing n by 10 each time
}


let isOver = false;
let counter = 1;
while (isOver != true) {
    let continueLoop  = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter++; 
}

// while (!isOver) {
//     let continueLoop = !confirm(`[${counter++}] Continue the loop?`);
// }

