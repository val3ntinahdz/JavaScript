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


    nextBtn.addEventListener("click", async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTableComponent(element);



        console.log("Users in the array:", usersStore.getUsers().length); // 10

        // if(usersStore.getCurrentPage() > usersStore.getUsers().length) {
        //     currentPageLabel.innerText = "No more users to show!";
        // }
        
    });

    prevBtn.addEventListener("click", async() => {
        await usersStore.loadPreviousPage();
        renderTableComponent(element);
        currentPageLabel.innerText = usersStore.getCurrentPage();
    });
}

// TODO: FIX PAGINATION BUG (new created instances does not appear in the table)