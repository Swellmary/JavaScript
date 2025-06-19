//Variable shadowing in JavaScript happens when a local variable (declared inside a function or block) has the same name as a variable in an outer scope — effectively "shadowing" or hiding the outer one within that inner block or function.


let name = "Global";

function greet() {
  let name = "Local"; // Shadows the global 'name'
  console.log(name);  // Output: "Local"
}

greet();
console.log(name);    // Output: "Global"


//⚠️ Variable shadowing is not always bad — but it can lead to bugs or confusion if not used carefully.
//Shadowing is only useful when you're aware of it and intend to keep the scopes separate. If it makes code harder to read or introduces confusion, it’s better to use a new variable name.

/*🧠 Best Practices
✅ Avoid shadowing unless there's a clear, local reason.

✅ Prefer meaningful variable names, especially for outer-scope variables.

✅ Use linters (like ESLint) to catch unintentional shadowing.

✅ Stick with let and const over var — they make shadowing easier to reason about.
*/