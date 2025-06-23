
// 2.2.2 What can arrays be useful for in practice?

let user = {
    name: "Greg",
    age: 22
}

let user2 = {
    name: "Julia", 
    age: 28
}

// instead of declaring multiple object we can just have one declaration and put it all items inside. See below:  

let users = [
    {
    name: "Greg",
    age: 22
    }, 
    
    {
    name: "Julia", 
    age: 28
    }   
]

console.log(users[0]);
console.log(users[1]);


//adding new user to the array
console.log("");

users[2] = {
    name: "Gimmy",
    age: 24
}

console.log(users[2]);


//typeof & instanceof
console.log("");

let workDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let sabathDay = "Sunday";

console.log(typeof workDays); // -> object
console.log(typeof sabathDay); // -> string

console.log(workDays instanceof Array); // -> true
console.log(sabathDay instanceof Array) // -> false

//LENGTH
console.log("");
console.log("LENGTH");

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names[5] = "Jeffrey";
console.log(names.length); // -> 6

//the names[4] is undefined since we also defined the names[] but without the 4th 
console.log(names); // [ 'Olivia', 'Emma', 'Mateo', 'Samuel', <1 empty item>, 'Jeffrey' ]
// names[4]: <1 empty item>

//INDEXOF - Locate the array's index, pushed at the end of the array
console.log("");
console.log("INDEXOF");

console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Maria")); // -> -1 (not found)

// PUSH
console.log("");
console.log("PUSH");

names.push("John");
console.log(names); // ["Marydale", "Jam", "Olivia", "Emma", "Mateo", "Samuel", "John""];

// UNSHIFIT - similar to push but at the pushed beginning of the array.
console.log("");
console.log("UNSHIFT");

names.unshift("Marydale", "Jonas");
console.log(names); // ["Marydale", "Jam", "Olivia", "Emma", "Mateo", "Samuel"];

//POP - The pop method allows you to remove the last element from the array.
console.log("");
console.log("POP");

let withoutJohn = names.pop();
console.log(withoutJohn); //last person John was removed

names.pop();
console.log(names); //Jeffery was removed but it's <1 empty item > because we declared a 5th index - [5] above

//SHIFT - similar to pop but removed the beginning. 
console.log("");
console.log("SHIFT");

let withoutMarydale = names.shift();
console.log(withoutMarydale);

names.shift();
console.log(names);

//REVERSE 
console.log("");
console.log("REVERSE");

names.reverse();
console.log(names);

// SLICE - The slice method allows you to create a new array from selected elements of the original array. Calling the method does not affect the original array. The method takes either one or two integer values as arguments.

let sl1 = names.slice(2);

