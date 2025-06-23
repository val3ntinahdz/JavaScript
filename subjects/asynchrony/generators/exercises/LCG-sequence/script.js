// This exercise is from: https://javascript.info/generators
function* pseudoRandomGenerator(seed) {
    // throw an error if the seed does not exist
    if (seed === 0 || !seed) 
        throw new Error("Not a valid seed. Try again");
        
    // keep score of the current generated value
    let curr = seed;
    yield curr;
    const seedExist = true;

    do {
        curr = curr * 16807 % 2147483647; // generate the next value;
        yield curr;
    } while (seedExist)


    seedExist = false;
}

const randGenerator = pseudoRandomGenerator(42);
console.log("Seed:", randGenerator.next().value); // 42
console.log(randGenerator.next().value); // 705894
console.log(randGenerator.next().value); // 1126542223
console.log(randGenerator.next().value); // 1579310009
console.log(randGenerator.next().value); // 565444343
console.log(randGenerator.next().value); // 807934826
console.log(randGenerator.next().value); // 421520601
