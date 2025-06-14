/**
 * Generator function for Fibonacci sequence.
 * @param {number} [limit] - Optional number of Fibonacci numbers to generate.
 */
function* fibonacciGenerator(limit) {
    let [a, b] = [0, 1];
    let count = 0;

    while (limit === undefined || count < limit) {
        yield a;
        [a, b] = [b, a + b];
        count++;
    }
}

// TODO: create a set timer to log the next Fibonacci number every second

// Example usage:
const fibGen = fibonacciGenerator(6); // Generates first 6 Fibonacci numbers

for (const num of fibGen) {
    console.log(num);
}