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

            // write your code here

            // let userName = prompt("Enter your name: ", "name");
            // let userPhone = prompt("Enter your phone: ", "phone");
            // let userEmail = prompt("Enter your email: ", "email");

            // let newUser = ["name: " + userName, "phone: " + userPhone, "email: " + userEmail];

            // let newContactsAdded = contacts.concat(newUser);

            // console.log(newContactsAdded);

            let last = contacts.length - 1;

            console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);