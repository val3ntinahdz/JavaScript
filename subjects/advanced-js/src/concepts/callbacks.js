import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
	const id = "5d86371f2343e37870b91ef12";
	findHero(id, (error, hero) => { // destructuring name
		// element.innerHTML = hero?.name || "There's no hero";

		if (error) {
			element.innerHTML = error;
			return; // this way we can handle error
		}

		element.innerHTML = hero.name; // Hulk
	});
	
}

/**
 * 
 * @param {String} id 
 * @param {(error?: String, hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {
	const hero = heroes.find(hero => hero.id === id);

	if (!hero) {
		callback(`Hero with id ${id} not found.`);
		return; // undefined
	}

	// we pass an error and an object (in case hero exists, it is return, otherwised UNDEFINED)
	callback(null, hero); // this is a function!
}