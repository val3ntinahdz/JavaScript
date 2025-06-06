import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    const id1 = "5d86371fd55e2e2a30fe1ccb9";

    findHero(id1)
        .then( name => element.innerHTML = name)
        .catch( error => element.innerHTML = error)
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async( id ) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw `hero with id ${id} not found`;

    return hero.name; // in an async function, a "return" means everything's going well
}