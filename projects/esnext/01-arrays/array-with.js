const state = [
    {
        id: 1,
        name: "Pride & Prejudice"
    },
    {
        id: 2,
        name: "Wuthering Heights"
    },
    {
        id: 3,
        name: "Ulyses"
    },
    {
        id: 4,
        name: "The hitchhiker's guide to galaxy"
    }
];


const index = 1;
const newName = "Le petit prince";

// const newState = state.map((hero, i) => {
//     if (i == index) {
//         hero.name = newName;
//     }

//     return hero; 
// });


// the array.with() method is used to copy a version of an array instance and change
// a value of a given index

// in this example, we are passing an index at position 1,
// and replacing its "name" value with a new name (see line 22)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with
const newState = state.with(index, {
    // .at() is an elegant method that help us retrieve an array´s value from a given position
    // check: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
    ...state.at(index),
    name: newName
}) 

state[0].name = "vAlu";

console.table(newState);