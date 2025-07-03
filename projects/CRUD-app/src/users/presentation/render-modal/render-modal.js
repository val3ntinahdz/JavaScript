// Assets can be imported as strings using ?raw suffix
// This is useful for when we´re using a templating system (like vite) and want dinamically insert HTML
// http://vite.dev/guide/assets

import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";
let modal;

// TODO: load user by id
export const showModal = () => {
    modal?.classList.remove("hide-modal"); // if modal exists... the hide-modal class is removed
}

export const hideModal = () => {
    // TODO: form reset
    modal?.classList.add("hide-modal");
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

    modal.addEventListener("click", (event) => {
        if (event.target.className === "modal-container") {
            hideModal();
        }
    })

    element.append(modal);
}