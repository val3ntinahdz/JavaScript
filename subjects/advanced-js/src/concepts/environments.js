// here´s a very good article about environment variables for you to check out:
// https://dmitripavlutin.com/environment-variables-javascript/

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentComponents = (element) => {
    console.log(import.meta.env); // VITE_API_KEY=MyExample


    // this way, we can access a variable´s property
    const html = `
      Dev: ${import.meta.env.DEV} <br/>
      Prod: ${import.meta.env.PROD} <br/>
      KEY: ${import.meta.env.VITE_API_KEY} <br/>
      Mode: ${import.meta.env.MODE} <br/>
    `;

    element.innerHTML = html;
}