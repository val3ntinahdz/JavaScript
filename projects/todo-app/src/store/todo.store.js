// The global state of my app
import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

// const generateIDS = () => {
//     this.id += 1;
// }



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
    console.log(state);
    console.log('Init store');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const addTodo = (todo) => {
    throw new Error('Not implemented');
}

const toggleTodo = () => {
    throw new Error('Not implemented');
}

const deleteTodo = () => {
    throw new Error('Not implemented');
}

const newFilter = Filters.All;
const setSelectedFilter = (newFilter) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}

export default {
    initializeStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    setSelectedFilter,
    getCurrentFilter,
}