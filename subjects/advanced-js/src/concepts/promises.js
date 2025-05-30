import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
   
}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */

const findHero = (id) => {
    return new Promise((result, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`hero with id ${id} not found.`);

    });
}