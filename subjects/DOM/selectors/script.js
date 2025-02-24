// Get the <p> elements from the document

// document.querySelector() extracts the first element of all elements it finds related to the element specified.
const paragraph = document.querySelector('p');
console.log(paragraph);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0].nodeName); 