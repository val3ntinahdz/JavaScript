import { Todo } from '../models/todo.model';
/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if (!todo) throw new Error('A Todo Object is required!');

    const html = `<h6>${todo.description}</h6>`;
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    return liElement;

}