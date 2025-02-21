const cars = ['Ford', 'Honda', 'Toyota'];

let i = 0;

// while syntax
// while(i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

while(cars[i]) {
    if (i === 1) { // this condition ensures that the element in the '1' position is skipped
        i++;
        continue; // skips the rest of the loop's body for this iteration, meaning 'Honda' will not be printed.
    }

    console.log(cars[i]);
    i++;
}
