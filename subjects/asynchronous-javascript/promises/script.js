// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert('runs after 3 seconds'));


// show circle with callback vs promises
// showCircle(cx, cy, radius, callback) = () => {
//     callback(calculateRadius);
    
// }

 
const calculateRadius = () => {
    console.log("calculate radius function connnected");

    const div = document.createElement('div');
    div.style.width = 150;
    div.style.height = 150;
    div.style.backgroundColor = "red";
    div.className = 'circle';

    document.body.append(div);
    const computedStyle = getComputedStyle(div);
}
