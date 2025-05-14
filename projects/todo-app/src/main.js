import './style.css'
import { App } from './todos/app';
import todoStore from './store/todo.store';

todoStore.initializeStore(),

App('#app'); // This is the place where i want to render my app