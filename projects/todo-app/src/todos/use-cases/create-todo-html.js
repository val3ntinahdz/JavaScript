import { Todo } from '../models/todo.model';
/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if (!todo) throw new Error('A Todo Object is required!');
    console.log(todo);

    const {done, description, id} = todo; // destructuring element

    const html = `
                    <div class="view">
                        <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
                        <label>${ description }</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
                `;
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);

    // if we check the todo, the "completed" class is added to our li element
    if (done)
        liElement.classList.add('completed');

    return liElement;

}