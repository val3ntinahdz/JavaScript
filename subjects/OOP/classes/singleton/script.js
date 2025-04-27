// a singleton is a unique instance of a class that can be shared within our whole application. 
// this is useful when we want one object controlling things across the app.
// ES modules are a great example of a singleton pattern-like behavior, since the modules are loaded only once. 
class Singleton {
    // the initialized instance of my class
    static instance; // initially undefined

    constructor(name = '') {
        console.log(Singleton.instance); // we reference the class because 'instance' is a static property

        if (!!Singleton.instance) {
            return Singleton.instance;

        }
        Singleton.instance = this; // points to the first created instance
        this.name = name; 
    }

}

const instance1 = new Singleton('ironman');
const instance2 = new Singleton('spiderman');
const instance3 = new Singleton('blackpanter');

console.log(`the name is ${instance1.name}`);
console.log(`the name is ${instance2.name}`);
console.log(`the name is ${instance3.name}`);

// here we modify the third instance's value
// it shows that the rest of the instances change too, because they are exactly the same object 
console.log('are they the same object?', instance1 === instance2);
// they mimic each other's behavior.
instance3.name = 'blackwidow';
console.log(`the name is ${instance1.name}`);
console.log(`the name is ${instance2.name}`);
console.log(`the name is ${instance3.name}`);