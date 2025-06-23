
//continuation to arrayUseFor file
//SLICE is picking up property in particular

let names = ["Olivia", "Emma", "Mateo", "Samuel"];

let sl1 = names.slice(2);
console.log(sl1);

let sl2 = names.slice(0, 2);
console.log(sl2);

let sl3 = names.slice(0, -3);
console.log(sl3)

let sl4 = names.slice(-1);
console.log(sl4);

console.log(names); //the overall array isn't really affected.

//CONCAT - The concat method creates a new array by attaching elements from the array given as an argument to the original array elements. The method changes neither the original array nor the array specified as an argument.

let otherNames = ["Mayne", "Jell", "Frett"];
let allNames = names.concat(otherNames);

console.log(names); // [ 'Olivia', 'Emma', 'Mateo', 'Samuel' ]
console.log(otherNames); // ["Mayne", "Jell", "Frett"];
console.log(allNames); // [  'Olivia', 'Emma', 'Mateo',  'Samuel', 'Mayne',  'Jell', 'Frett']