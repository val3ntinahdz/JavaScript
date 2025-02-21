const cars = ['Ford', 'Honda', 'Toyota'];

let i = 0;

// while syntax
// while(i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

while(cars[i]) {
    if (i === 1) {
        i++
        continue;
    }

    console.log(cars[i]);
    i++;
}
