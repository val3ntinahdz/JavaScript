// Promise.race is similar to Promise.all, but waits for the first settled promise (the faster one)
// here are some examples
// check this docs about the Promise API -> https://javascript.info/promise-api
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {
    element.innerHTML = "Loading...";
    
    const renderValue = (value) => {
        element.innerHTML = value; 
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise(),
    ]).then( renderValue );
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('slow promise');
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('medium promise');
    }, 1500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('fast promise');
    }, 1000);
}) // this one will solve faster than the rest