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

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }

        return todo;
    })
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
}

const newFilter = Filters.All;
const setSelectedFilter = (newFilter) => {
    if (Object.values(Filters).includes(newFilter)) {
        state.filter = newFilter;
    } else {
        throw new Error("Invalid filter.");
    }
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