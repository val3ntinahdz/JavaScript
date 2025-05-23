import html from './app.html?raw'; // https://stackoverflow.com/questions/67330947/vite-cannot-handle-xxx-html-files
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from './use-cases/render-todos';

const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    DeleteTasksButton: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountSpan: '#pending-count',
} 
/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
        updatePendingCount(); // always update the pending tasks count in the task table
    }

    const updatePendingCount = () => {
        const pendingCountSpan = document.querySelector(ElementIds.PendingCountSpan);
        const todosPending = todoStore.getTodos(Filters.Pending);

        if (pendingCountSpan) {
            pendingCountSpan.textContent = todosPending.length;
        }
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
    const deleteCompletedButton = document.querySelector(ElementIds.DeleteTasksButton)
    const filters = document.querySelectorAll(ElementIds.TodoFilters);

    // Listeners
    // The keyup event in JavaScript is triggered when a user releases a key on the keyboard. 
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return; // unless another key is pressed, the code keeps executing

        // The trim() method in JavaScript is used to remove whitespace characters (spaces, tabs, and newlines) from both the beginning and the end of a string, 
        // returning a new string without modifying the original. 
        if (event.target.value.trim().length === 0) return; // the function continues only if there's a value in the event.target.value

        todoStore.addTodo(event.target.value);
        displayTodos();
        // After appending the new to do and pressing 'enter', the event.target.value will reload
        event.target.value = '';
    })


    // this code handles toggle and task deletion:
    todoListUL.addEventListener('click', (event) => {

        // MDN docs says > The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.
        // check the docs for more info > https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

       // event.target points to the element the event is being listened from. 
       const element = event.target.closest('[data-id]'); // This line search for the nearest parent containing the "data-id" html attribute
       if (!element) return;

       if (event.target.classList.contains('destroy')) { // <buton class="destroy"></button>
        todoStore.deleteTodo(element.getAttribute('data-id'));
       } else {
        todoStore.toggleTodo(element.getAttribute('data-id'));
       }

       displayTodos();
    })
    

    // delete all the completed tasks
    deleteCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    })

    // change filters
    filters.forEach(element => {
        element.addEventListener('click', (elem) => {
            filters.forEach(el => el.classList.remove('selected')); // to remove the 'selected' attribute before adding it.
            elem.target.classList.add('selected');

            switch(elem.target.text) {
                case 'Todos':
                    todoStore.setSelectedFilter(Filters.All);
                break;
                case 'Pendientes':
                    todoStore.setSelectedFilter(Filters.Pending);
                break;
                case 'Completados':
                    todoStore.setSelectedFilter(Filters.Completed);
                break;

            }
            
            displayTodos();
        })
    });
}