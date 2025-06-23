// This exercise is from: https://javascript.info/generators

function* pseudoRandomGenerator(seed, multiplier = 16807n, modulus = 2147483647n, maxLimit = Infinity) {
    
    // throw an error if the seed does not exist
    if (typeof seed !== 'bigint' || seed <= 0n) 
        throw new Error("Seed must be a positive BigInt");
        
    // limit iterations
    let count = 0;

    // keep score of the current generated value
    let curr = seed;
    yield curr;

    while (++count < maxLimit) {
        curr = (curr * multiplier) % modulus;
        yield curr;
    }
}

const randGenerator = pseudoRandomGenerator(427438753475347826823648726722n, 393403n, 2392839283n, 4);
console.log("Seed:", randGenerator.next().value);
console.log(randGenerator.next().value); 
console.log(randGenerator.next().value);
console.log(randGenerator.next().value);
console.log(randGenerator.next().value);
