'use strict';

const createPerson = ( firstName, lastName ) => ({ firstName, lastName });

const person = createPerson( 'Ford', 'Prefect' );
console.log( person );

function printArguments() {
    console.log( arguments );
}


// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
// Check => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_par for reference
const printArguments2 = (...args) => {
    return args;
}

printArguments(42, true, false, "rouge", "La vie est belle");

// const arrayArgs = printArguments2(42, true, false, "Beeblebrox", "...est belle");
// console.log( arrayArgs );

//
const [ number, logical, mentallyStable, mrPresident, laVie ] = printArguments2(42, true, false, "Zaphod Beeblebrox", "...est belle");
console.log({ number, logical, mentallyStable, mrPresident, laVie });

// We can re-assign attributes when defining them
const { lastName: newLastName } = createPerson('Valentina', 'León' );
console.log({ newLastName });