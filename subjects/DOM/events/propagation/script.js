// Event propagation phases
// 1. Capture Phase: events go from the top (window) down to the target.
// 2. Target Phase: the event reaches the actual target element.
// 3. Bubble Phase: the event travels back up from the target to the topmost ancestor.

// Selecting elements
const container = document.querySelector('.container');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Event Handlers
function handleChildClick(event) {
    alert('Child clicked');
}

function handleParentClick(event) {
    alert('Parent clicked');
}

function handleContainerClick(event) {
    alert('Container clicked');
}

// Bubbling Phase (Default)
child.addEventListener('click', handleChildClick);   // child -> parent -> container
parent.addEventListener('click', handleParentClick); // parent -> container
container.addEventListener('click', handleContainerClick);

// Capturing Phase
child.addEventListener('click', handleChildClick, { capture: true });   // container -> parent -> child
parent.addEventListener('click', handleParentClick, { capture: true }); // container -> parent

// Stopping Propagation Example
container.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the event from reaching ancestors
    alert('Container clicked (Propagation stopped)');
}, { capture: true });

// Event propagation is useful for event delegation.