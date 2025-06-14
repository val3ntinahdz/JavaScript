const createCircle = (cx, cy, radius, message = "Hello!") => {
    let div = document.createElement('div');

    return new Promise( (resolve => {
        if(!document.querySelector(".circle")) { // the circle now appears only once
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
    })).then( (resolvedDiv) => { // The value you pass to resolve(...) inside the Promise becomes the argument received by .then(...)

        if (resolvedDiv) {
            setTimeout(() => {
                resolvedDiv.classList.add("message-pop");
                const bubble = document.createElement("span");
                bubble.textContent = message;
                bubble.style.position = "relative";
                bubble.style.top = "70px";
                bubble.style.left = "70px";

                div.appendChild(bubble);
            }, 1100)
        }
    })
}

// createCircle(150, 150, 100);
