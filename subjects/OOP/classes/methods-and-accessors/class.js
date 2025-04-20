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
// 1. creates a function named 'Person', which is the class declaration.
// 2. it stores class methods, which can be the constructor and custom methods.

class Person {
    static _count = 0; // NOTE: the underscore is often used to indicate that a variable is "private" or for internal use only.

    // static methods like Person.message() are NOT accessible from instances like 'spiderman.message()' (otherwise it would throw an error!)
    // they're meant to be utility functions related to the class itself.
    static get count() {
        return Person._count + " instances of Person class";
    }

    static message() {
        console.log("Hello i am a static method");
    }

    name = '';
    code = '';
    phrase = '';
    food = '';

    // the constructor method is executed right when a new instance is created.
    // it is also the only method that does not return 'undefined' but an object.
    constructor(name, code, phrase, food) {  // it is valid to define default values for arguments. (e.g., name="barbie")
        this.code = code;
        this.name = name;
        this.phrase = phrase;

        Person._count++;
    }

    // In classes, we can define getters and setters.
    // getters are used to access properties of the class.
    get getName() {
        return this.name; // you can see the name of the person by calling this method.
    }
    
    // setters are used to modify properties of the class.
    set setFavoriteFood(food) {
        this.food = food;
    }
    
    whoAmI() {
        console.log(`I am ${this.name} and my identity is ${this.code}`);
    }

  
    myPhrase() {
        // calls the whoAmI method to print the identity first.
        this.whoAmI();
        // prints the phrase of the person.
        console.log(`My phrase: ${this.phrase}`);
    }
}


// creating instances of the Person class.
const spiderman = new Person('Peter Parker', 'Spiderman', 'I am your lovely friend spiderman');
const ironman = new Person('Tony Stark', 'IronMan', 'I am ironman');
const valentina = new Person('Valentina', 'Black Widow', 'I am black widow');

// logging the instances to the console.
console.log(spiderman);
console.log(ironman);
console.log(valentina);

// checking the type and properties of the Person class.
alert(typeof Person); // -> function

// every class’s prototype has a constructor property that points back to the class itself. 
// this shows that Person is the constructor function for the Person.prototype.
alert(Person === Person.prototype.constructor); // true
alert(Object.getOwnPropertyNames(Person.prototype)); // ["constructor", "whoAmI", "myPhrase"]

// calling the myPhrase method on the spiderman instance.
spiderman.myPhrase();

valentina.setFavoriteFood = 'Pasta';
console.log("Valentina's favorite food is:", valentina.food); // -> Pasta

// calling the getName getter method on the spiderman instance.      
console.log(spiderman.getName); // -> Peter Parker
spiderman.setFavoriteFood = 'Aunt May\'s cookies';
console.log(spiderman.food); // -> Aunt May's cookies
console.log("static count", Person._count); // -> 3

// this is a static method, so it can be called without creating an instance of the class.
console.log("static count", Person.count); // -> 3 instances of Person class

Person.message(); // -> output will be: Hello i am a static method

// fyi, we can also work with properties out of the class and assign those directly to our 'Person' class. 
Person.externalProperty = "This is not very recommended, but we should learn the different approaches to manage methods & properties!"
console.log(Person.externalProperty);