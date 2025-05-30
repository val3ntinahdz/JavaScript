import { heroes } from "./data/heroes"

export const callbacksComponent = (element) => {\
    const id = "5d86371f233c9f2425f16916"
    findHero(id, (blackWidow) =>{
        element.innerHTML = blackWidow.name;
    });

}

/**
 * 
 * @param {String} id 
 * @param {(hero:Object) => void} callback 
 */
// A callback is a function received as an argument.
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    callback(hero);
}