import { renderAddBtn } from "./presentation/render-add-btn/render-add-btn";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTableComponent } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

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
    renderModal(element, async(userLike) => {
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user
        );
        renderTableComponent();
    } );
}