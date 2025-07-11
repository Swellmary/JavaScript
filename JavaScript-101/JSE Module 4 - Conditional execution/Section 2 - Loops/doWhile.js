let isOver;
let counter = 1;
do {
    isOver = !confirm(`[${counter++}] Continue loop?`);
} while (!isOver);

//another example

let condition = false;
while (condition) {
    console.log("A while loop iteration"); //neveer executed
}
do {
    console.log("A do... whiile loop iteration");
}while (condition); //executed once