import html from './app.html?raw'; // https://stackoverflow.com/questions/67330947/vite-cannot-handle-xxx-html-files
/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {
    // funcion anonima autoinvocada
    // cuando la funcion app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();
}