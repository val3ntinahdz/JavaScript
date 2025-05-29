import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
	const id1 = "5d86371f2343e37870b91ef1";
	const id2 = "5d86371fd55e2e2a30fe1ccb";


	// this is a callback hell: callbacks inside other callbacks... not the best approach.
	findHero(id1, (error, hero1) => { // destructuring name
		// element.innerHTML = hero?.name || "There's no hero";

		if (error) {
			element.innerHTML = error;
			return; // this way we can handle error
		}

		findHero(id2, (error, hero2) => {
			if (error) {
				element.innerHTML = error;
				return; // this way we can handle error
			}

			element.innerHTML = `${hero1.name} / ${hero2.name}`; // -> Hulk / Black Panther
		})
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