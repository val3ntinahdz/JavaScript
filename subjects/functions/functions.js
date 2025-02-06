// A method is a function inside of an object 
function greet(name) {
    console.log(arguments); // Built-in object to send the functions multiple arguments
    console.log("Hey! " + name); // An operator is used to concatenate elements
}

// Anonimous function
const greet2 = function(name) {
    console.log("Hey! " + name);
}

// Lambda functions
const greetArrow = () => {
    console.log("This is an arrow! ");
}

const greetArrow2 = (name) => {
    console.log("This is an arrow! " + name);
}

greet('Valentina', 18, 'red');
greet2('Valentina');
greetArrow2('Zoé');