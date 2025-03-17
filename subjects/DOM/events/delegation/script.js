// Select the common ancestor of all <li> elements
const tree = document.querySelector('.tree');
console.log(tree);

// Attach an event listener to the tree
tree.addEventListener('click', function(e) {
    const target = e.target; // save the event target (the current selected elem)
    // console.log(target);
    // console.log(target.tagName);
    if(target.tagName != 'LI') return; // if an element outside the LI is clicked, do nothing
    for(const li of target.children) {
        li.hidden = !li.hidden; // toggle 'hidden' attribute in each <li>
    }
});