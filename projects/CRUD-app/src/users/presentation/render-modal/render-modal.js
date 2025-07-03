// Assets can be imported as strings using ?raw suffix
// This is useful for when we´re using a templating system (like vite) and want dinamically insert HTML
// http://vite.dev/guide/assets

import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";
let modal;
let form;

// TODO: load user by id
export const showModal = () => {
    modal?.classList.remove("hide-modal"); // if modal exists... the hide-modal class is removed
}

export const hideModal = () => {
    // TODO: form reset
    modal?.classList.add("hide-modal");
    form?.reset();
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement("div");
    modal.innerHTML = modalHtml;
    modal.className = "modal-container hide-modal";
    form = modal.querySelector("form");

    modal.addEventListener("click", (event) => {
        if (event.target.className === "modal-container") {
            hideModal();
        }
    })

    console.log(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {}

        for (const [key, value] of formData) {
            
            if (key === "balance") {
                userLike[key] = +value; // turning a string into a number with +, the same as Number(value)
                continue;
            }

            if (key === "isActive") {
                userLike[key] = (value === "on") ? true:false;
                continue; 
            }

            if (!userLike["isActive"]) {
                userLike["isActive"] = false;
            }



            userLike[key] = value;
            
        }

        // TODO: save user;
        console.log(userLike);

        hideModal();
    })

    element.append(modal);
}