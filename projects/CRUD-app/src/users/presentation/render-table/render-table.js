import usersStore from "../../store/users-store";
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
        table.addEventListener("click",tableSelectListener);
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