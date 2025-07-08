const classicBooks = [
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

// What is a deep copy algorithm?
// web.dev says: A deep copy algorithm also copies an object’s properties one by one, but invokes itself recursively when it finds a reference to another object, 
// creating a copy of that object as well. 


// structuredClone is a built-in JavaScript function used for creating deep copies of objects 
// since trying to copy them using the "..." (spread operator) caused changes in the structure of the first object

// previously, a JSON-based hack was commonly used to solve this problem
// example: const myDeepCopy = JSON.parse(JSON.stringify(myOriginal));

// read this article if you want to get nerdy about this cool method in ESNext:
// https://web.dev/articles/structured-clone
const classicBooksCopy = structuredClone(classicBooks);
classicBooksCopy[2].name = "La peste";

console.table(classicBooks);
console.table(classicBooksCopy);