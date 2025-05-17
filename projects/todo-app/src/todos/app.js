import html from './app.html?raw'; // https://stackoverflow.com/questions/67330947/vite-cannot-handle-xxx-html-files
import todoStore from '../store/todo.store';
import { Todo } from './models/todo.model';
import { renderTodos } from './use-cases/render-todos';

const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
} 
/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
    }


    // funcion anonima autoinvocada (sincrona)
    // cuando la funcion app() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // HTML references
    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
    const todoListUL = document.querySelector(ElementIds.TodoList);

    // Listeners
    // The keyup event in JavaScript is triggered when a user releases a key on the keyboard. 
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return; // unless another key is pressed
        if (event.target.value.trim().length === 0) return; // the function continues only if there's a value in the event.target.value

        todoStore.addTodo(event.target.value);
        displayTodos();
        // After appending the new to do and pressing 'enter', the event.target.value will reload
        event.target.value = '';
    })

    todoListUL.addEventListener('click', (event) => {
        // event.target points to the element the event is being listened from. 
        const element = event.target.closest('[data-id]'); // 

        // MDN docs says > The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.
        // check the docs for more info > https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
        todoStore.toggleTodo(element.getAttribute('data-id')); // extract the todo id
        displayTodos();
    })
}