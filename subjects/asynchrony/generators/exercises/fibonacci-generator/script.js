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
const fibGen = fibonacciGenerator(13);
const controller = new AbortController();
const isPaused = false;

async function logFibonacciNums() {
    
    // MDN Docs says: AbortController.abort()
    // Aborts an asynchronous operation before it has completed. 
    // This is able to abort fetch requests, consumption of any response bodies, and streams.
    setTimeout(() => { // Interrupt the generator after 10 seconds passed even if there´re still numbers
        controller.abort();
        console.log("Fibonacci generator paused.")
    }, 10000)

    try {
       for(num of fibGen) {
            if (controller.signal.aborted) break;
            console.log(num);
            await new Promise(resolve => { setTimeout(resolve, 1000) });
        }

    } catch (error) {
        alert(error);
    } finally {
        console.log("DONE!");
    }
}

logFibonacciNums();