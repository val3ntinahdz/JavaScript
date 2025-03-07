// Working with DOM navigation
// recommended resources!
// https://www.youtube.com/watch?v=IWRS_AM2fiE&t=1878s
// https://es.javascript.info/dom-navigation



// we call our main element with id 'playground' and set it as our parent element
const parentElement = document.getElementById('playground');

const childElement1 = document.createElement('h3');
const childElement2 = document.createElement('p');
parentElement.append(childElement1, childElement2);


// access different elements within the DOM
// you can see an object's properties by running:
console.dir(parentElement);
console.log(parentElement.ownerDocument); // document
console.log(parentElement.parentNode); // body
console.log(parentElement.previousElementSibling); // h1

// this returns the first child node (could be a text node like a space)
console.log('first child:', parentElement.firstChild); // #text

// this returns the first element node, ignoring non-element nodes
console.log('first element child:', parentElement.firstElementChild); // <h1></h1>
console.log(parentElement.lastChild); // p

console.log('last child:', parentElement.lastChild); // could be text node or element node
console.log('last element child:', parentElement.lastElementChild); // will be the <p> element

console.log(childElement1.parentNode); // div#playground
console.log(childElement1.previousElementSibling); // h1
console.log(childElement1.nextElementSibling); // p

console.log(childElement2);
console.log(childElement2.previousElementSibling); // h3

// A loop to check our document.body childnodes individually
for (let i = 0; i < document.body.childNodes.length; i++) {
    const node = document.body.childNodes[i];
    console.group(`Node ${i + 1}: Type ${node.nodeType}`);
    console.log(node.nodeName);  // display the name of the node
    console.log(node);
    console.groupEnd();
}


////////////////////////////////////////////////////////////////////////////////////////////////

// manipulating newly created elements through DOM traversing
childElement1.nextElementSibling.textContent = 'This is a paragraph';