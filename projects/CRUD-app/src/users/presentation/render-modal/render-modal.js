// Assets can be imported as strings using ?raw suffix
// This is useful for when we´re using a templating system (like vite) and want dinamically insert HTML
// http://vite.dev/guide/assets

import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";
import { User } from "../../models/user";
import { getUserById } from "../../use-cases/get-user-by-id";
let modal;
let form;

// TODO: load user by id
export const showModal = async(id) => {
    modal?.classList.remove("hide-modal"); // if modal exists... the hide-modal class is removed

    // TODO: GET USERS BY ID
    
    if (!id) return;
    const user = await getUserById(id);
    console.log(user);
}

export const hideModal = () => {
    // TODO: form reset
    modal?.classList.add("hide-modal");
    form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {

}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback) => {
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

    // in this listener, we make sure we submit the code in the correct format
    form.addEventListener("submit", async(event) => {
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

        await callback(userLike);

        hideModal();
    })

    element.append(modal);
}