// The global state of my app
import { Todo } from "../todos/models/todo.model";

// Using an Enum here. It refers to a special class that represents a group of constants (unchangeable variables)
// https://www.geeksforgeeks.org/enums-in-javascript/
const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Read a new book'),
        new Todo('Ride bicycle'),
        new Todo('Code'),
    ],
    filter: Filters.All, // default value
}

// this function is going to call the data saved in localStorage
const initializeStore = () => {
    loadStore();
    console.log(state);
    console.log('Init store');
}

const loadStore = () => {
    // Here's a cool article to help you understand localStorage > https://www.freecodecamp.org/espanol/news/como-usar-localstorage-en-javascript
    const savedState = localStorage.getItem('state');
    if (savedState) {
        const { todos = [], filter = Filters.All } = JSON.parse(savedState);
        state.todos = todos;
        state.filter = filter;
    }
}

const saveStateToLocalStorage = () => {
    // To save an entire JavaScript object to local storage, it's necessary to first serialize it into a string using JSON.stringify()
    // Local storage can only store string values
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch(filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid!`);
    }
}

const addTodo = (description) => {
    if (!description) throw new Error("The description is required!");
    state.todos.push(new Todo(description));

    saveStateToLocalStorage();
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }

        return todo;
    })

    saveStateToLocalStorage();
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setSelectedFilter = (newFilter = Filters.All) => {
    if (Object.values(Filters).includes(newFilter)) {
        state.filter = newFilter;
    } else {
        throw new Error("Invalid filter.");
    }

    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initializeStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setSelectedFilter,
    getCurrentFilter,
}