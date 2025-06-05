// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert('runs after 3 seconds'));


// show circle with callback vs promises
// showCircle(cx, cy, radius, callback) = () => {
//     callback(calculateRadius);
    
// }

 
const createCircle = (cx, cy, radius) => {
    return new Promise((resolve => {
        if(!document.querySelector(".circle")) { // the circle now appears only once
            const div = document.createElement('div');
            div.style.width = 0;
            div.style.height = 0;
            div.style.top = cy + "px";
            div.style.left = cx + "px";
            div.className = 'circle';
            div.style.background = "red";
            div.style.border = "1px solid black";


            document.body.append(div);

            setTimeout(() => {
                div.style.transition = "width 0.5s ease, height 0.5s ease, border-radius 0.5s ease";
                div.style.width = radius * 2 + "px";
                div.style.height = radius * 2 + "px";
                div.style.borderRadius = radius * 2 + "px";
            }, 0)


            setTimeout(() => resolve(div), 500);
        } else {
            resolve(document.querySelector(".circle"));
        }
    }));
    // console.log("calculate radius function connnected");

    return;
}

// createCircle(150, 150, 100);
