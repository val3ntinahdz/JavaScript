// Use case 1: Conditional Return in function
// The ternary operator can be useful in functions with 'return' statements.
const biggest = (a, b) => (a > b) ? a : b;

// Use case 2: Conditional assignment
const hasMembership = (member) => member ? '2 dollars' : '10 dollars';

console.log(biggest(2030404, 9388302)); // b
console.log(hasMembership(true));

// Use case 3: Conditional element in array
// The ternary operator can also be used in arrays or objects to approach elements handling with condition;
const friend = false;
const friendsArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    friend ? 'Thor' : 'Loki',
    (()=> 'Nick Fury')(), // -> Anonymous self-invoked function
    biggest(10, 15)
];

console.log(friendsArr); // Output: ['Peter', 'Tony', 'Dr. Strange', 'Loki', 'Nick Fury']


// Use case 4: Multiple conditional assignments
// The ternary operator is useful for assigning values based on multiple conditions
const n = 65;
const grade = n >= 95 ? 'A+' :
              n >= 90 ? 'A' :
              n >= 85 ? 'B+' :
              n >= 80 ? 'B' :
              n >= 75 ? 'C+' :
              n >= 70 ? 'C' : 'F';

console.log({ n, grade }); // Output: {n: 65, grade: 'F'}