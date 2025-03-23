// Here we ue the constructor 'function' to create new classes. 
// This approach requires us to manually create properties using 'this'


function Persona(name, age) {
    console.log('This line of code was executed');
    this.name = name;
    this.age = age;
}

const teresa = new Persona('Teresa', 70);
console.log(teresa);


// in past ES6 versions, an alternative had to be implemented in order to create
// objects containing the same heritage and the same methods. This way, new instances could be created. 