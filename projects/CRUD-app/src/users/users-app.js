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
}