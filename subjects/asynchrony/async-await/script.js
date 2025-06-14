// Examples with ASYNC/AWAIT
// Async is a keyword used to declare asynchronous functions in JavaScript. 
// In other words, the functions with the word 'async' before will always return a promise

// Turn function into async/await syntax

import axiosRequest from 'https://esm.sh/axios';

async function parseJokes() {

    
    try {
        
        const result = await axiosRequest.get("https://v2.jokeapi.dev/joke/Any")
        const { joke, type, setup, delivery } = result.data;
        
        if (type === "single") {
            if (joke.toLowerCase().startsWith("c")) {
                return joke;
            }
    
        } else if (type === "twopart") {
    
            if (
                setup.toLowerCase().startsWith('c') && 
                (delivery.toLowerCase().startsWith('c'))
            ) {
                console.log(`This jokes start with letter C > ${setup} - ${delivery}`);
            }
        }
    
    
        const theActualJoke = joke ?? `${setup} - ${delivery}`;
        console.log("The actual joke: ", theActualJoke);
    
        return theActualJoke;

    } catch (error) {

        alert("No joke could be displayed. Try later.")
        alert(`ERROR ${error}`);
    }

}

parseJokes();