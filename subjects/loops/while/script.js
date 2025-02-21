const cars = ['Ford', 'Honda', 'Toyota'];

let i = 0;

// WHILE
// SYNTAX:
// while (condition) {
//     // loop body
// }

while(cars[i]) {
    if (i === 1) { // this condition ensures that the element in the '1' position is skipped
        i++;
        continue; // skips the rest of the loop's body for this iteration, meaning 'Honda' will not be printed.
    }

    console.log(cars[i]);
    i++;
}


// DO... WHILE
console.warn('Do While');
// The only difference between 'do while' syntax and the previous one,
// is that 'Do While' will execute the internal block once.
// SYNTAX:
// do {
//     // loop body
// } while (condition);
let j = 2;

do {
    console.log(cars[j]);
    j++;
} while (j < cars.length); // output: Toyota