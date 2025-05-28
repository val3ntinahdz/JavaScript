import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
	const id = "5d86371f2343e37870b91ef12";
	findHero(id, (hero) => { // destructuring name
		element.innerHTML = hero?.name || "There's no hero";  // Hulk
	});
	
}

/**
 * 
 * @param {String} id 
 * @param {(hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {
	const hero = heroes.find(hero => hero.id === id);

	callback(hero); // this is a function!
}