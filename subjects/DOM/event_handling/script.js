// What is an event listener?
// An event is an action responding to our code. This means that, is basically how the page behaves depending on 
// the events we assign it. 


// i recommend to check the MDN docs (this exercise comes from there)
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events

const btn = document.querySelector('button');
const title = document.querySelector('h1');
console.log(btn);

// create a button that when clicked, changes the whole document body color, including the button background color.
const random = (num) => { return Math.floor(Math.random() * (num + 1)); }

const changeColor = () => {
    const randomCol = `rgb(${random(400)} ${random(200)} ${random(200)})`;
    document.body.style.backgroundColor = randomCol;
    btn.style.backgroundColor = randomCol;
    btn.style.color = 'white';
    title.style.color = 'white';
}


btn.addEventListener('click', changeColor);