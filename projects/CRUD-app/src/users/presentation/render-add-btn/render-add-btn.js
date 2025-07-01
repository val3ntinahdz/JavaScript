import "./render-add-btn.css";

/**
 * 
 * @param {HTMLDivElement} element
 * @param { () => void } callback
 */
export const renderAddBtn = (element, callback) => {
    const fabBtn = document.createElement("button");
    fabBtn.innerText = "+";
    fabBtn.classList.add("fab-btn");

    element.append(fabBtn);

    fabBtn.addEventListener("click", () => {
        if(!callback) return;

        callback();
    })
}