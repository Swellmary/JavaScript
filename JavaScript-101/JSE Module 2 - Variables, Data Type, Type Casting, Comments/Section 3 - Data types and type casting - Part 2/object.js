

//COMPLEX DATA TYPES ~ OBJECT

let object = {};
console.log(typeof object);


let wholeObject = {
    str: "hi, I'm ",
    num: 34

    // console.log(str + num); ❌ Invalid but you can create a function and there create console method
};
console.log(wholeObject);
console.log(wholeObject.str); // getting the properties only
console.log(wholeObject.str + wholeObject.num);

wholeObject.str = "hey! I'm ";
wholeObject.num = 20 + String(" something");
console.log(wholeObject.str + wholeObject.num); //hey! I'm 20 something

delete wholeObject.num;

console.log(wholeObject.num) //undefined
