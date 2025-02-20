// Conditionals: Ternary operator

// syntax 
// condition ? ifTrue : ifFalse;

const day = 6;
const currentHour = 10;

let openHour;
let message; // Is open or is closed;


// if (day === 0 || day === 6) {
//     console.log("Weekend");
//     openHour = 9;
// } else {
//     console.log("Week day");
//     openHour = 11;
// }

// if (currentHour >= openHour) {
//     message = "It's open!";
// } else {
//     message = `it's closed! today we open at ${openHour}`;
// }

// The code above can be refactored using ternary operators.
// Ternary operators help us create conditionals with truthy and falsy operations.
// ? means 'if' and : is equal to 'else'
openHour = ([0,6].includes(day)) ? 9 : 11; // take a look at the 'includes()' method -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
message = (currentHour >= openHour) ? "It's open!" : `it's closed! today we open at ${openHour}`;
console.log({ openHour, message });