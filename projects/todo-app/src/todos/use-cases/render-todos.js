import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    if (!element)
        element = document.querySelector(elementId); // .todo-list div in HTML

    if (!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = ''; // Everytime we call this function, we are gonna purge its content first.

    console.log(elementId, todos);

    todos.forEach( todo => {
        element.append(createTodoHTML(todo));
    });
}