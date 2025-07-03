
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

name = prompt("Enter a name: ");
phone = prompt("Enter a phone number: ");
email = prompt("Enter an email: ");

let newContact = { name, phone, email };
newContact = name && phone && email ? contacts.push(newContact) : "Please enter all details.";

console.log(contacts);