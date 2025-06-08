// Promise: an object that manages asynchronous operations.
//          wrap a Promise Object around {asynchronous code}
//          "i promise to return a value"
//          PENDING -> RESOLVED OR REJECTED
//          SYNTAX: new Promise((resolve, reject) => {asynchronous code})


import axiosRequest from 'https://esm.sh/axios';

axiosRequest.get("https://v2.jokeapi.dev/joke/Any")
    .then(response => {
       const result = response.data;
       //    console.log(result);
        return result;
    })
    .then(result => {
        // const letterRegex = (response.data.joke).startsWith('c');
        // console.log(`A joke that starts with letter c: ${ letterRegex }`)

        if (result.type === "single") {
            if (result.joke.toLowerCase().startsWith("c")) {
                return result.joke
            }
        }

        return result;

    })
    .then(result => {
      const theActualJoke = result.joke ?? `${result.setup} - ${result.delivery}`;

      console.log("The actual joke: ", theActualJoke);
      return theActualJoke;
    })
    .catch(error => {
        console.log(`ERROR! ${error}`);
    })