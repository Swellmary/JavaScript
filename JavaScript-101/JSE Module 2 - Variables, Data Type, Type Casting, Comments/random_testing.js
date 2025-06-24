// let sunflower = 60;
// let rose = 50;

// console.log("price point for sunflower is " + sunflower);
// console.log("price point for sunflower is " + rose);

// function sum(a,b) {
//     return a + b;
// }

// console.log("1 + 1 was never equal " + sum(1,1));


//this means that a method function can take the subject in the same scope or console and not from the declared variable. 
// console.log("hey yow".length);
// console.log("hey mamasita" .slice(3, 12));
// console.log("Joe" .charAt(0));

// let nullValue;
// console.log(nullValue);

// let thisNullValue = null;
// console.log(thisNullValue);

// console.log(typeof notDeclaredValue); // ->undefined
// console.log(notDeclaredValue); // -> Uncaught ReferenceError: notDeclaredValue is not defined


// const str1 = 42 + +"1"; 

// console.log(str1);

// let names = ["Olivia", "Emma", "Mateo", "Samuel"];

// let sl1 = names.slice(2);
// console.log(sl1);

// let sl2 = names.slice(0, 2);
// console.log(sl2);

// let sl3 = names.slice(0, -3);
// console.log(sl3)

// let sl4 = names.slice(-1);
// console.log(sl4);

let books = [
    {
        title: "Speaking JavaScript", 
        author: "Axel Rauschmayer",
        pages: 460

    },

    {
        title: "Programming JavaScript Applications", 
        author: "Eric Elliott",
        pages: 254

    },

    {
        title: "Understanding ECMAScript 6", 
        author: "Nicholas C. Zakas",
        pages: 352

    }
];

let newBook = {
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    pages: 256
}


books.push(newBook);

//Question 5: Use the slice command to copy the last two books to the new array.


books.shift();

console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);