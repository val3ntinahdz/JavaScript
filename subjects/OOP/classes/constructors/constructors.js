// Constructor Function Approach (Pre-ES6)
// This method manually assigns properties using 'this' inside a function.
// When 'new' is used, JavaScript performs the following steps behind the scenes:
// 1. Creates a new empty object: {}.
// 2. Binds 'this' to the newly created object.
// 3. Executes the function's code, adding properties to 'this'.
// 4. Returns the newly created object.

function Persona(name, age) {
    console.log('A new instance is being created...');
    this.name = name; // 'this' refers to the new object being created
    this.age = age;
}

// Adding methods using prototype (to avoid duplicating them in every instance)
Persona.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Creating an instance using 'new'
const teresa = new Persona('Teresa', 70);
console.log(teresa.greet()); // Output: Hello, my name is Teresa and I am 70 years old.


// ES6 Class Approach
// The class syntax simplifies object creation, improving readability and structure.

class PersonaClass {
    constructor(name, age) {
        console.log('A new instance is being created...');
        this.name = name;
        this.age = age;
    }

    // Methods are automatically placed on the prototype (no need for manual assignment)
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance using 'new'
const maria = new PersonaClass('Maria', 60);
console.log(maria.greet()); // Output: Hello, my name is Maria and I am 60 years old.


// Key Differences:
// 1. The constructor function requires manually adding methods to the prototype.
// 2. The class syntax automatically organizes methods under a single definition.
// 3. The 'class' keyword improves code clarity and resembles other OOP languages.