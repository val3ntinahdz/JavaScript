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
console.log(!0); // true
console.log(!returnFalse())

// double NOT !! is normally used to convert a value into a boolean type
console.log( 'Test with double !! ->', !!"i'm not a boolean" );

console.warn('And Operator'); // Executed or fulfilled if all values are true.
console.log(true && false);// false
console.log(false && false); // false
console.log(true && !false); // true
alert(null && 5) // if the first operand is falsy, AND returns it.

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

// Short circuit evaluation 
true || alert('i will not be executed!'); // here, the operator stops the operation immediately.
false || alert('i will be executed fr!'); // since the left part is falsy, then the alert will be shown

console.warn('Assignments with AND and OR');

const imUndefined = undefined;
const imNull = null;
const falsy = false;

const a = true && "js is so cool" && 18; // output: 18
const b = "hello" && "buddy" && imUndefined && true; // output: undefined;
const c = imNull || imUndefined || !false; // true
const d = "boo" || falsy; // boo

console.log({ a, b, c, d });