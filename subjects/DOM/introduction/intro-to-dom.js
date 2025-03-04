// In this Introduction section, we cover a series of examples to learn:
// 1. selecting elements (querySelector, querySelectorAll, getElementById).
// 2. manipulating elements (innerText, textContent, style, innerHTML).
// 3. creating and appending elements (createElement, appendChild).


// Get the <p> elements from the document
// document.querySelector() extracts the first element of all elements it finds related to the element specified.
const paragraph = document.querySelector('p');
console.log(paragraph);

const paragraphs = document.querySelectorAll('p'); // selects all <p> elements
console.log(paragraphs);
console.log(paragraphs[0].nodeName); // logs the node name of the first <p> element

// manipulating the elements 
paragraph.innerText = 'this paragraph has been updated!'; // change text content
paragraph.style.color = 'blue'; // modify text color


// check the differences among innerHTML, innerText and textContent:
// https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/#heading-what-is-the-innertext-property

const content = document.querySelector('div');
console.log(content.innerHTML); // <h3>what is the DOM?</h3>
                                // <p style="color: blue;">this paragraph has been updated!</p>
                                // <p>All operations in the DOM start with the <strong>document</strong> object</p>
                                // <p style="display: none">This is an example to check how "textContent" displays every element in the markup...even hidden ones.</p>
                                // <button id="btn"></button>


console.log(content.innerText); // what is the DOM?

                                // this paragraph has been updated!

                                // All operations in the DOM start with the document object


console.log(content.textContent); // what is the DOM?
                                // this paragraph has been updated!
                                // All operations in the DOM start with the document object
                                // This is an example to check how "textContent" displays every element in the markup...even hidden ones.



const button = document.getElementById('button'); // select the button element
button.textContent = "Hello, i am a button"; // .textContent prints the text as it is in the markup 
button.innerText = "It's me!"; // this property ignores HTML tags


// creating and appending elements
// this function creates and appends a new <h3> element to the DOM!
function addElement() {
    const content = document.querySelector('.content');
    const newHeader = document.createElement('h3');
    newHeader.innerText = 'Fundamental data types in the DOM';
    content.appendChild(newHeader);
}

addElement();