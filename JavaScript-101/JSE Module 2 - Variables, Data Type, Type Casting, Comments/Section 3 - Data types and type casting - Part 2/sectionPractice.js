/*Question 1:
Create an object that describes a train ticket and store it in the variable named ticket.
The object must have three fields:

Starting station — The key should be from, and the value should be the name of the nearest station in your area.
End station — The key should be to, and the value should be any station within 100 kilometers.
Ticket price — The key should be price, and the value should be the amount you would like to pay for that ticket.

The object should be created using curly brackets, listing all fields directly inside.
Finally, display the values of all fields of the ticket object in the console using console.log. */

let trainTicket = {
    from: "Iligan City",
    to: "Cagayan de Oro City",
    price: 160
};

console.log(`1. ${trainTicket.from} to ${trainTicket.to} tickets please and prepare the ${trainTicket.price} peso, thank you for your cooperation.`);

/*Question 2: Declare an empty object and save it to a person variable. Using dot notation, add the name and surname fields to the object by entering your data as values. Try to display the individual fields on the console. */

let person = {};
person.name = "Mary Jane";
person.surname = "Suarez";

console.log(`2. ${person.name} ${person.surname} is a fullstack developer and she good at it.`);

/*Question 3: We are setting up our small library of books about JavaScript programming. We have three books and want to prepare a list of them. We will store three pieces information about each book: title, author, and number of pages:

Speaking JavaScript, Axel Rauschmayer, 460;
Programming JavaScript Applications, Eric Elliott, 254;
Understanding ECMAScript 6, Nicholas C. Zakas, 352.
Create an array of three objects representing the books. Each object must have the following properties: title, author, pages. */
console.log("__________________________");
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
]

console.log("3. Array & 4. Concat Array")
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);


/*Question 4: Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and, in turn, all the book names in the collection. */

let newBook = {
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    pages: 256
}

// let fourBooksAvailable = books.concat(newBook);
// console.log(fourBooksAvailable);

// console.log("--------------------------");
// console.log(fourBooksAvailable[3].title);

books.push(newBook);
console.log(books);

//Question 5: Use the slice command to copy the last two books to the new array.

console.log("");
console.log("copy the last 2 array");

console.log(books.slice(2, 3));
//or 
console.log("------------------");
console.log("different logic same result: 2");
console.log(books.slice(2, 4));

/*Question 6: The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn. */
console.log(""); 

books.shift();

console.log("How many books left:", books.length);
console.log("The", books[0].title);
console.log("The", books[1].title);
console.log("And the", books[2].title);

//Question 7: Display the sum of the pages of all the books from the collection.
console.log();

let sumOfAllPages = books[0].pages + books[1].pages + books[2].pages;
console.log ("Sum of all books pages:", sumOfAllPages); //2 ways of writing sentence and items in console.
console.log(`All pages is ${sumOfAllPages}`);


