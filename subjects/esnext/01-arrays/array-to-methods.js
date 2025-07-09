const heroes = ["Batman", "Superman", "Flash", "Aquaman"];

// toSorted()
// creates a new array with the elements sorted (alphabetically)
const sortedHeroes = heroes.toSorted();

// toReversed()
const reversedHeroes = heroes.toReversed();

// splice()
// this method changes the content of an array by removing or replacing existing elements 
// or adding new elements
// const deletedHero = heroes.splice(0, 1, "Green lantern");

// toSpliced()
// this method returns a new array with the changes made in the corresponding positions
const splicedHeroes = heroes.toSpliced(0, 1, "Green lantern");


console.table(heroes);
console.table(sortedHeroes);
console.table(reversedHeroes);

// console.log(deletedHero);
// console.table(heroes);

console.table("spliced heroes: ", { splicedHeroes });
console.table(heroes);