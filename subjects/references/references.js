// Pass by reference or value
let a = 20;
let b = 979897909;
a = 30 // set a new value to a variable

console.log({ a, b });


// In JavaScript, every primitive is passed by value & all objects are passed by reference.
let harry = { name: 'Harry' };

// The principal advantage of the spread operator is that it creates a shallow copy of the object,
// meaning top-level properties are copied by value, but nested objects still point to the same reference in memory.
let louis = { ...harry }; // The 'spread' syntax expands an array into its elements
louis.name = 'Louis';
console.log({ harry, louis });

// const changeName = (person) => {
//     person.name = 'Zayn';
//     return person
// } // 
// this example returns -> {liam: {…}, zayn: {…}}liam: {name: 'Zayn'}zayn: {name: 'Zayn'}, but, wtf?!


// The 'rest' parameter unifies various elements and returns an array of them.
// MDN Web Docs definition: The rest syntax collects multiple elements and "condenses" them into a single element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


// When passing an object to a function, it is passed by reference. Modifying the object's properties
// inside the function will also modify the original object.
const changeName = ({ ...person }) => {
    person.name = 'Zayn';
    return person
} // this correctly prints the objects with its associated value -> {liam: {…}, zayn: {…}} liam: {name: 'Liam'}, zayn: {name: 'Zayn'}

let liam = { name: 'Liam' };
let zayn = changeName(liam);

console.log({ liam, zayn });

// Arrays
const fruits = ['apple', 'pear', 'pineapple'];
const otherFruits = fruits;

otherFruits.push('mango');
console.table({ fruits, otherFruits });
// By printing this, the following structure appears: 
// fruits	'apple'	'pear'	'pineapple'	'mango'
// otherFruits	'apple'	'pear'	'pineapple'	'mango'
// But, 'mango' appears twice... this is because if i modify an element inside the array, it will be reflected in both sides of the table.

const fruits2 = ['apple', 'pear', 'pineapple'];

// By using the 'spread' operator, to separate every element in the array and return them independently.
const otherFruits2 = [...fruits2];

otherFruits2.push('watermelon sugar');
console.table({ fruits2, otherFruits2 }); 
// The output now is:
// fruits2	'apple'	'pear'	'pineapple'	
// otherFruits2	'apple'	'pear'	'pineapple'	'watermelon sugar'


// Slice() 
const coolStuff = ['Watching the sunset', 'Taking pics', 'Romanticizing life'];

// the slice() method of array instances returns a new array.
// p.d. it doesn't modify the original array!

// console.time() starts a timer you can use to track how much time an operation takes. Very useful!
console.time('slice');
const moreCoolStuff = coolStuff.slice();
console.timeEnd('slice');

moreCoolStuff.push('Coding in javascript');
console.table({ coolStuff, moreCoolStuff }); 