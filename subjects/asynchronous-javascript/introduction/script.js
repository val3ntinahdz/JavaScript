// this is an exercise from freeCodeCamp (amazing) class about asynchronous javascript!
// check out the link: https://youtu.be/ZYb_ZU8LNxs?si=APefuv6-bLl-uLyc -> i hiighly recommend it.


// synchronous (Js runs from the top to the bottom)
console.log(" I ");
console.log(" eat ");

// asynchronous
// here, the console will print "ice cream" after 4 secs
setTimeout(() => {
    console.log(" ice cream ");
}, 4000);

console.log(" with a ");
console.log(" spoon ");