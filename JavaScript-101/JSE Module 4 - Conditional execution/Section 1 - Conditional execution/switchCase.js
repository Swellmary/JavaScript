

let gate = prompt("choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a": 
        alert("Gate A: empty");
        break;
    case "b": 
        alert("Gate B: main prize");
        break;
    case "c": 
        alert("Gate C: empty");
        break;
    default :
        alert("No gate" + String(gate));
}

if (win) {
    alert("Winner!");
}