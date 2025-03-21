// Prototype: the object knows where it is from, and indicates what type of object it is.

// the basic Class Syntax is
// class MyClass {
  // class methods
    //     constructor() { ... }
    //     method1() { ... }
    //     method2() { ... }
    //     method3() { ... }
    //     ...
    // }


// what happens under the hood when we create a new class?
// 1. Creates a function named 'Person', which is the class declaration.
// 2. It stores class methods, which can be construct() and buildGreet()
class Person {
    // the constructor object is a method that will execute right when a new instance is created
    // It is also the only method that does not return 'undefined' but an object
    name = '';
    code = '';
    phrase = '';
    // it is valid that we define default values for arguments
    constructor(name = 'no name', code = 'no code', phrase = 'no phrase') {
        this.code = code;
        this.name = name;
        this.phrase = phrase;

        this.buildGreet = function () {
            console.log(`Name: ${this.name}, code: ${this.code}, phrase: ${this.phrase}`)
        }
    }
}

const spiderman = new Person('Peter Parker', 'Spider', 'I am your lovely friend spiderman');
const ironman = new Person('Tony Stark', 'IronMan', 'I am ironman');
ironman.buildGreet();
console.log(spiderman);
console.log(ironman);
alert(typeof Person); // -> function
alert(Person === Person.prototype.constructor); // true
alert(Object.getOwnPropertyNames(Person.prototype)); // constructor