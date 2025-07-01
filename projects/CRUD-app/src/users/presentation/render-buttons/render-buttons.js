import usersStore from "../../store/users-store";
import { renderTableComponent } from "../render-table/render-table";
import "./render-buttons.css";

/**
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
    const nextBtn = document.createElement("button");
    nextBtn.innerText = " ⏭ ";

    const prevBtn = document.createElement("button");
    prevBtn.innerText = " ⏮ ";
    
    const currentPageLabel = document.createElement("span");
    currentPageLabel.id = "current-page";
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(prevBtn, currentPageLabel, nextBtn);


    nextBtn.addEventListener("click", () => {
        const nextPage = usersStore.loadNextPage();
        renderTableComponent(nextPage);
    })
}