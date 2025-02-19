const returnTrue = () => {
    console.log("Return true");
    return true;
}

const returnFalse = () => {
    console.log("Return false");
    return false;
}

console.warn('Negative Boolean');
console.log(!true); // false
console.log(!false); // true
console.log(!returnFalse())


console.warn('And Operator'); // Executed or fulfille if all values are true.
console.log(true && false);// false
console.log(false && false); // false
console.log(true && !false); // true

console.log('Test 4 conditions with AND ->', true && true && true && false); // false

console.log('==================');
// A negative boolean will be returned since the first value outputs false. 
// Now, the second one is totally ignored.
console.log(returnFalse() && returnTrue()); // false
console.log(returnTrue() && returnFalse()); // false;

console.log('======= && =======');
returnFalse() && returnTrue();


console.warn('OR'); // true
console.log(true || false); // If one of both conditions is true, it returns True
// In this case, a positive boolean will be returned since one of both values is true. 
// The second one is not executed.
console.log(returnTrue() || returnFalse()); 

console.log('Test 4 conditions with OR ->', false || false || true || false); // true