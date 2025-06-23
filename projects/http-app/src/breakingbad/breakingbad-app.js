// This is a reusable piece of my app that can be called anywhere!

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = (element) => {
    // console.log(element);
    document.querySelector("#app-title").innerHTML = "Breaking Bad App";
    element.innerHTML = "Loading...";
}