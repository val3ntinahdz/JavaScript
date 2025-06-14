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
const fibGen = fibonacciGenerator(7);

async function logFibonacciNums() {
   for(num of fibGen) {
        console.log(num);

        await new Promise(resolve => { setTimeout(resolve, 1000) });
    }
}

logFibonacciNums();