// Assets can be imported as strings using ?raw suffix
// This is useful for when we´re using a templating system (like vite) and want dinamically insert HTML
// http://vite.dev/guide/assets

import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";
let modal;
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement("div");
    modal.innerHTML = modalHtml;
    modal.className = "modal-container hide-modal";

    element.append(modal);
}