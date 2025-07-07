import usersStore from "../../store/users-store";
import { deleteUser } from "../../use-cases/delete-user-by-id";
import { showModal } from "../render-modal/render-modal";
import "./render-table.css";

let table;

// create a table using DOM
const createTable = () => {
    const table = document.createElement("table");
    const tableHeaders = document.createElement("thead");
    tableHeaders.innerHTML = `
        <tr>
            <th>ID</th>
            <th>balance</th>
            <th>first name</th>
            <th>last name</th>
            <th>active?</th>
            <th>actions</th>
        </tr>
    `;

    const tableBody = document.createElement("tbody");
    table.append(tableHeaders, tableBody);
    return table;
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListener = (event) => {
    const element = event.target.closest(".select-user");
    console.log(element);

    if (!element) return;
    const id = element.getAttribute("data-id");
    showModal(id);
}


/**
 * 
 * @param {MouseEvent} event 
 */
const tableDeleteListener = async(event) => {
    const element = event.target.closest(".delete-user");
    console.log(element);

    if (!element) return;
    const id = element.getAttribute("data-id");

    try {
        // delete user
        await deleteUser(id);
        // reload the page
        await usersStore.reloadPage();
        // load the page in case the step above ocurred
        document.querySelector("#current-page").innerText = usersStore.getCurrentPage();
        // render page
        renderTableComponent();
    } catch (error) {
        alert(error);
    }
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTableComponent = (element) => {
    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();

        // The append() method is used to insert a set of Node objects or strings as the last children of a specified parent Element. 
        // It adds content without replacing existing content.
        element.append(table);

        // TODO: Add listeners to table
        table.addEventListener("click", tableSelectListener);
        table.addEventListener("click", tableDeleteListener);
    }

    let tableHTML = "";

    users.forEach(user => {
        tableHTML += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.isActive }</td>
                <td>
                    <a href="#/" class="select-user" data-id="${ user.id }">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${ user.id }">Delete</a>
                </td>
            </tr>
        `
    });

    table.querySelector("tbody").innerHTML = tableHTML;
}