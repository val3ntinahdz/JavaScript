// className & classList!
console.log(document.querySelector('h1').className); // returns the whole HTML code with the class name of the element selected
console.log(document.querySelector('h1').classList); // returns an array of the element's classes

// Add new classes to elements
document.querySelector('h1').classList.add('proof'); // <h1 class="first-title proof">Element Styles and Classes</h1>

// Replace a class
document.querySelector('h1').classList.replace('proof', 'rabbit');

// Remove clases
document.querySelector('h1').classList.remove('rabbit');

// Toggle classes
document.querySelector('h1').classList.toggle('rabbit');
