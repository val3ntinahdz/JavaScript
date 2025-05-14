// The global state of my app
import { Todo } from "../todos/models/todo.model";

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

export default {
    initializeStore,
}