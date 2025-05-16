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
}

const toggleTodo = () => {
    throw new Error('Not implemented');
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const newFilter = Filters.All;
const setSelectedFilter = (newFilter) => {
    state.filter = newFilter;
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
    setSelectedFilter,
    getCurrentFilter,
}