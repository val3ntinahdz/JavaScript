// this is a protip from "JavaScript by Devtalles course"
// using multiple constructors to refactorize code and create various instances
class Person {
    static newObject({name, age, occupation}) {
        return new Person(name, age, occupation); // destructuring
    }

    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getInfo() {
        console.log(`info: ${this.name}, ${this.age}, ${this.occupation}`);
    }
}

const alice = {
    name: 'Alice',
    age: 30,
    occupation: 'Software Engineer'
}

const person1 = Person.newObject(alice);
person1.getInfo();