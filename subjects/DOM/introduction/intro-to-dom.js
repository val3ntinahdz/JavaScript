// Get the <p> elements from the document

// document.querySelector() extracts the first element of all elements it finds related to the element specified.
const paragraph = document.querySelector('p');
console.log(paragraph);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0].nodeName); 

// import the function into the DOM with .onload
document.body.onload = addElement; 

function addElement() {
    const content = document.querySelector('.content');
    const newHeader = document.createElement('h3');
    newHeader.innerText = 'Fundamental data types in the DOM';

    content.appendChild(newHeader);
}
