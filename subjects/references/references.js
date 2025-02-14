// Pass by reference or value
let a = 20;
let b = 979897909;
a = 30 // set a new value to a variable

console.log({ a, b });


// In JavaScript, every primitive is passed by value & all objects are passed by reference.
let harry = { name: 'Harry' };

// The principal advantage of the spread operator is that it creates a shallow copy of the object,
// meaning that the top-level properties are copied, but nested objects are still referenced in memory.
let louis = { ...harry }; // The 'spread' syntax expands an array into its elements
louis.name = 'Louis';
console.log({ harry, louis });

// const changeName = (person) => {
//     person.name = 'Zayn';
//     return person
// } // 
// this returns -> {liam: {…}, zayn: {…}}liam: {name: 'Zayn'}zayn: {name: 'Zayn'}, but, wtf?!


// The 'rest' parameter unifies various elements and returns an array of them.
// MDN Web Docs definition: The rest syntax collects multiple elements and "condenses" them into a single element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const changeName = (...person) => {
    person.name = 'Zayn';
    return person
}

let liam = { name: 'Liam' };
let zayn = changeName(liam);

console.log({ liam, zayn });