//Variable shadowing in JavaScript happens when a local variable (declared inside a function or block) has the same name as a variable in an outer scope — effectively "shadowing" or hiding the outer one within that inner block or function.
//not ideal to apply in modern code, it's only something we need to be aware of

let name = "Global";

function greet() {
  let name = "Local"; // Shadows the global 'name'
  console.log(name);  // Output: "Local"
}

greet();
console.log(name);    // Output: "Global" 

