// const tree = document.getElementById('tree');
const tree = document.querySelector('.tree');
console.log(tree);

tree.addEventListener('click', function(e) {
    const target = e.target;
    console.log(target);
    console.log(target.tagName);
    if(target.tagName != 'LI') return;
    for(let li of target.children) {
        li.hidden = !li.hidden;
    }
});