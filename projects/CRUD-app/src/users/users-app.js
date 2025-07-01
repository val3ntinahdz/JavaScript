import { renderAddBtn } from "./presentation/render-add-btn/render-add-btn";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTableComponent } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {
    element.innerHTML = "";
    await usersStore.loadNextPage();
    // console.log(usersStore.getUsers()); // 10 users
    renderTableComponent(element);
    renderButtons(element);
    renderAddBtn(element, () => { console.log("from the parent") });
}