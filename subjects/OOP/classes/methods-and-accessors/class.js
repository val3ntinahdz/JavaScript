// Prototype: the object knows where it is from, and indicates what type of object it is.

// The class syntax makes it immediately clear that you're defining a blueprint for objects. 
// It’s more declarative and aligns with how classes are defined in other programming languages.
// The basic Class Syntax is:
// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
// }

// What happens under the hood when we create a new class?
// 1. Creates a function named 'Person', which is the class declaration.
// 2. It stores class methods, which can be the constructor and custom methods.
class Person {
    // The constructor method is executed right when a new instance is created.
    // It is also the only method that does not return 'undefined' but an object.
    name = '';
    code = '';
    phrase = '';
    food = '';
    
    // It is valid to define default values for arguments.
    constructor(name, code, phrase, food) {
        this.code = code;
        this.name = name;
        this.phrase = phrase;
    }


    // In classes, we can define getters and setters.
    // Getters are used to access properties of the class.
    get getName() {
        return this.name;
    }
    
    // Setters are used to modify properties of the class.
    set setFavoriteFood(food) {
        this.food = food;
    }
    
    whoAmI() {
        console.log(`I am ${this.name} and my identity is ${this.code}`);
    }

  
    myPhrase() {
        // Calls the whoAmI method to print the identity first.
        this.whoAmI();
        // Prints the phrase of the person.
        console.log(`My phrase: ${this.phrase}`);
    }
}

// Creating instances of the Person class.
const spiderman = new Person('Peter Parker', 'Spiderman', 'I am your lovely friend spiderman');
const ironman = new Person('Tony Stark', 'IronMan', 'I am ironman');

// Logging the instances to the console.
console.log(spiderman);
console.log(ironman);

// Checking the type and properties of the Person class.
alert(typeof Person); // -> function
alert(Person === Person.prototype.constructor); // true
alert(Object.getOwnPropertyNames(Person.prototype)); // ["constructor", "whoAmI", "myPhrase"]

// Calling the myPhrase method on the spiderman instance.
spiderman.myPhrase();

spiderman.setFavoriteFood = 'Aunt May\'s cookies';
console.log(spiderman.food); // -> Aunt May's cookies