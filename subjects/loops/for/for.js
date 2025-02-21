const food = ['Pasta', 'Tamales', 'Tacos', 'Foo'];

// FOR (index-based iteration)
console.warn('the For loop');

// SYNTAX:
// for (begin; condition; step) {
//     // ... loop body ...
// }

for(let i = 0; i < food.length; i++) {
    console.log(food[i]); // print each element of the array
}

// FOR...IN (iterates over indices)
console.warn('For...in');

// SYNTAX: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for (let variable in object) {
//     statement
// }

for(let i in food) {
    console.log(food[i]);
}


// FOR...OF (iterates over values directly)
console.warn('For...of');

// SYNTAX:
// for (variable of iterable) {
//     statement
// }

// Extracts each value from the array and assigns it to the loop variable.
for(let i of food) {
    console.log(i);
}