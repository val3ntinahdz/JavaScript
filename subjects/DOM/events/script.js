// What is an event listener?
// An event is an action responding to our code. This means that, is basically how the page behaves when the user interacts with it.


// recommended MDN docs:
// Event handling basics -> https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events
// Remove events -> https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
// Math cube root -> https://www.geeksforgeeks.org/javascript-program-to-find-cube-root-of-a-number/

const btn = document.querySelector('button');
const title = document.querySelector('h1');
console.log(btn);
console.dir(btn); // shows properties in the element in the console (it returns a DOM object)

let clickCount = 0;

// function that generates a random number within a given range
const random = (num) => { return Math.floor(Math.random() * (num + 1)); }

// function to change the background color
const changeColor = () => {
    const randomCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; // the max RGB value is 255
    document.body.style.backgroundColor = randomCol;
    btn.style.backgroundColor = randomCol;
    btn.style.color = 'white';
    title.style.color = 'white';

    clickCount++;
    // i don't know what i'm doing but i feel cool doing it
    if(clickCount >= Math.floor(Math.cbrt(Math.pow(11, 2)) + 4)) {
        btn.removeEventListener('click', changeColor);
        btn.textContent = `Button clicked ${clickCount} times. Event removed!`
    }
}

// syntax to add a handler:
// element.addEventListener(event, handler, [options]);
btn.addEventListener('click', changeColor);

