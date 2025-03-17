// Event propagation
// The event propagation is composed of 3 phases:
// 1. Capture: A process when the window element gets notified about the event and executes it through all the elements in descendant order.
// 2. Target: Refers to the element that has the event
// 3. Bubble (the default phase): executes the event callback in ascendant order in the DOM hierarchy

const container = document.querySelector('.container');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// when we fire an event in a child element, the parent elements listen to the same type of event (bubbling phase)
