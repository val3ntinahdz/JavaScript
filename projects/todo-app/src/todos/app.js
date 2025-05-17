import html from './app.html?raw'; // https://stackoverflow.com/questions/67330947/vite-cannot-handle-xxx-html-files
import todoStore from '../store/todo.store';
import { Todo } from './models/todo.model';
import { renderTodos } from './use-cases/render-todos';

const ElementIds = {
    TodoList: '.todo-list',
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


    // funcion anonima autoinvocada
    // cuando la funcion app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
}