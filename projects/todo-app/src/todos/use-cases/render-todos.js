import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

export const renderTodos = (elementId, todos = []) => {
    console.log(elementId, todos);
    const element = document.querySelector(elementId); // .todo-list div in HTML

    todos.forEach( todo => {
        element.append(createTodoHTML(todo));
    });
}